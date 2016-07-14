<?php

/**
 * @file
 * Forms and callbacks for controlling the admin side of webform2maximizer.
 *
 * These forms will appear in webform2maximizer local action of webforms.
 */

/**
 * @param $node
 * @return mixed
 */
function webform2maximizer_manage($node) {
  //Lookup a webform2maximizer_webform entry if it exists
  $select = db_select('webform2maximizer_webform', 'maximizer_webform');
  $select->fields('maximizer_webform');
  $select->condition('nid', $node->nid);
  $maximizer_webform = $select->execute()->fetchAll();
  if ($maximizer_webform) {
    $maximizer_webform = $maximizer_webform[0];
  }

  $select = db_select('webform2maximizer_component', 'maximizer_component');
  $select->fields('maximizer_component');
  $select->condition('nid', $node->nid);
  $maximizer_components = $select->execute()->fetchAll();

  $settings = array();
  $mappings = array();

  $select = db_select('webform_component', 'component');
  $select->fields('component');
  $select->condition('nid', $node->nid);
  $component_results = $select->execute()->fetchAll();

  $components = array();
  foreach ($component_results as $component) {
    $components[$component->cid] = $component;
  }

  foreach ($maximizer_components as $maximizer_component) {
	$clean_name = filter_xss($component->name);
    $delete_url = url('node/' . $node->nid . '/webform/webform2maximizer/delete/' . $maximizer_component->sid);
    $component = $components[$maximizer_component->cid];
    $mappings[] = array($clean_name, $component->form_key, $maximizer_component->maximizerkey, "<a href='$delete_url'>Delete</a>");
  }

  $render_array['mappings'] = array(
    '#theme' => 'table',
    '#header' => array('Form Field', 'Form Key', 'maximizer Field', 'Operations'),
    '#rows' => $mappings,
    '#empty' => 'No Mappings Yet'
  );

  $render_array['form'] = drupal_get_form('webform2maximizer_settings_form', $node, $maximizer_webform, $maximizer_components);

  if ($maximizer_webform) {
    if (!$maximizer_webform->active) {
      drupal_set_message(t('This webform is currently set to NOT send to maximizer.'), 'warning');
    }
  }

  return $render_array;
}

/**
 * Delete component function
 *
 * @param $node
 * @param $sid
 */
function webform2maximizer_component_delete($node, $sid) {
  try {
    db_delete('webform2maximizer_component')
      ->condition('sid', $sid)
      ->condition('nid', $node->nid)
      ->execute();

    drupal_goto('node/' . $node->nid . '/webform/webform2maximizer');
  } catch (Exception $e) {
    drupal_set_message(t('Error trying to store settings in database'), 'error');
  }

}

/**
 * @param $variables
 * @return string
 */
function theme_webform2maximizer_manage_overview($variables) {
  $settings = $variables['settings'];
  $mappings = $variables['mappings'];

  return 'maximizer Settings';
}

/**
 * Validate callback for the component add form
 */
function webform2maximizer_component_add_validate($form, &$form_state) {
  if ($form_state['values']['maximizer_key'] == 'See Below' && !$form_state['values']['maximizer_other']) {
    form_set_error('maximizer_other', 'Field is required when Other is selected for maximizer Field');
  }

  if ($form_state['values']['maximizer_other'] && $form_state['values']['maximizer_key'] != 'Other') {
    form_set_error('maximizer_key', 'maximizer Field must be Other if using a custom mapping');
  }
}

/**
 * Submit callback for the component add form
 */
function webform2maximizer_component_add_submit($form, &$form_state) {

  $values['nid'] = $form_state['values']['nid'];
  $values['cid'] = $form_state['values']['component_id'];

  if ($form_state['values']['maximizer_other']) {
    $values['maximizerkey'] = $form_state['values']['maximizer_other'];
  }
  else {
    $values['maximizerkey'] = $form_state['values']['maximizer_key'];
  }

  try {
    $return_value = db_insert('webform2maximizer_component')
              ->fields($values)
              ->execute();
  } catch (Exception $e) {
    drupal_set_message(t('Error trying to store settings in database'), 'error');
  }

  drupal_goto('node/' . $form_state['values']['nid'] . '/webform/webform2maximizer');
}

/**
 * Component add form
 */
function webform2maximizer_component_add($form, &$form_state, $node) {
  $select = db_select('webform_component', 'component');
  $select->fields('component');
  $select->condition('nid', $node->nid);
  $component_results = $select->execute()->fetchAll();

  include(drupal_get_path('module', 'webform2maximizer') . "/webform2maximizer_fields.inc");

  $component_options = array();

  foreach ($component_results as $component) {
    $component_options[$component->cid] = $component->name . ' (' . $component->form_key . ')';
  }

  $maximizer_options = array();

  foreach ($webform2maximizer_available_fields as $key => $value) {
    $maximizer_options[$key] = $value . ' (' . $key . ')';
  }

  $form['nid'] = array(
    '#type' => 'value',
    '#value' => $node->nid,
  );

  $form['component_id'] = array(
    '#type' => 'select',
    '#title' => t('Webform Field'),
    '#options' => $component_options,
    '#required' => TRUE,
    '#description' => 'Field in Webform to map from',
  );

  $form['maximizer_key'] = array(
    '#type' => 'select',
    '#title' => t('maximizer Field'),
    '#options' => $maximizer_options,
    '#required' => TRUE,
    '#description' => 'Field to map to in Maximizer',
  );

  $form['maximizer_other'] = array(
    '#type' => 'textfield',
    '#title' => t('Other maximizer Field (Custom Mapping)'),
    '#maxlength' => 255,
    '#required' => FALSE,
    '#description' => "If 'Other' is selected above, enter custom maximizer mapping",
  );

  $form['settings']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Submit'),
  );

  return $form;
}

/**
 * Submit callback for the settings form
 */
function webform2maximizer_settings_form_submit($form, &$form_state) {

  $nid = $form_state['values']['nid'];
  $select = db_select('webform2maximizer_webform', 'maximizer_webform');
  $select->fields('maximizer_webform');
  $select->condition('nid', $nid);
  $maximizer_webform = $select->execute()->fetchAll();

  $values['nid'] = $nid;
  $values['url'] = $form_state['values']['url'];
//  $values['campaign'] = $form_state['values']['campaign'];
  $values['active'] = $form_state['values']['active'];
  $values['idkey'] = $form_state['values']['idkey'];

  try {
    if ($maximizer_webform) {
      $count = db_update('webform2maximizer_webform')
          ->fields($values)
          ->condition('nid', $values['nid'])
          ->execute();
    }
    else {
      $return_value = db_insert('webform2maximizer_webform')
                    ->fields($values)
                    ->execute();
    }
    drupal_set_message(t('Settings have been saved'));
  } catch (Exception $e) {
    drupal_set_message(t('Error trying to store settings in database'), 'error');
  }
}

/**
 * Validate callback for the settings form
 */
function webform2maximizer_settings_form_validate($form, &$form_state) {
  //Make sure the URL has a valid schema
  if (strpos($form_state['values']['url'], 'http://') !== 0 && strpos($form_state['values']['url'], 'https://') !== 0) {
    form_set_error('url', 'URL Must begin with either http:// or https://');
  }

  //Remove a trailing / if one exists
  if (strrpos($form_state['values']['url'], '/') == strlen($form_state['values']['url']) -1) {
    $form_state['values']['url'] = substr($form_state['values']['url'], 0, strlen($form_state['values']['url']) -1);
  }

  //Check the url to see if we can connect to it.
  $result = drupal_http_request($form_state['values']['url'], array('max_redirects' => 0, 'timeout' => 10));
  if ($result->code <= 0) {
    form_set_error('url', "Unable to connect to url, message: '$result->error'");
  }
}

/**
 * Settings form
 */
function webform2maximizer_settings_form($form, &$form_state, $node, $maximizer_webform, $sugar_components) {
  $form['nid'] = array(
    '#type' => 'value',
    '#value' => $node->nid,
  );

  $form['settings'] = array(
    '#type' => 'fieldset',
    '#title' => t('maximizer Settings'),
  );

  $form['settings']['active'] = array(
    '#type' => 'select',
    '#title' => t('Send to maximizer'),
    '#default_value' => $maximizer_webform ? $maximizer_webform->active : 0,
    '#options' => array('0' => 'False', '1' => 'True'),
    '#required' => TRUE,
  );

  $form['settings']['url'] = array(
    '#type' => 'textfield',
    '#title' => t('maximizer URL'),
    '#default_value' => $maximizer_webform ? $maximizer_webform->url : 'http://62.232.92.99/SupportersWebImport/SupportersWebImport.asmx?wsdl',
    '#size' =>  80,
    '#maxlength' => 128,
    '#required' => TRUE,
    '#description' => t('Enter the URL of your maximizer System (Ex: http://62.232.92.99/SupportersWebImport/SupportersWebImport.asmx?wsdl)'),
  );

  $form['settings']['idkey'] = array(
    '#type' => 'textfield',
    '#title' => t('Default maximizer api key'),
    '#default_value' => $maximizer_webform ? $maximizer_webform->idkey : '09963634-BA70-42A1-97BC-B46D9FB56A6B',
    '#size' =>  80,
    '#maxlength' => 128,
    '#required' => FALSE,
    '#description' => t('Enter the api key of your maximizer Campaign'),
  );

  $form['settings']['submit'] = array(
    '#type' => 'submit',
    '#value' => t('Submit'),
  );

  return $form;
}