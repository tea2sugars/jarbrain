<?php

/**
 * Implements hook_panels_layouts()
 */
function jarbrain_jarbrain_12_onecol_panels_layouts() {
  $items['jarbrain_12_onecol'] = array(
    'title' => t('Single column 12'),
    'category' => t('Jarbrain: 12 Column Grid'),
    'icon' => 'jarbrain_12_onecol.png',
    'theme' => 'jarbrain_12_onecol',
    'admin css' => '../jarbrain_panels_admin_12.css',
    'regions' => array('middle' => t('Middle column')),
  );

  return $items;
}

