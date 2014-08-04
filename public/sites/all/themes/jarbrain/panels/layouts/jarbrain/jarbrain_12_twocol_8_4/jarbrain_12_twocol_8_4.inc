<?php

/**
 * Implements hook_panels_layouts().
 */
function jarbrain_jarbrain_12_twocol_8_4_panels_layouts() {
  $items['jarbrain_12_twocol_8_4'] = array(
    'title' => t('Two Column 8-4'),
    'category' => t('Jarbrain: 12 Column Grid'),
    'icon' => 'jarbrain_12_twocol_8_4.png',
    'theme' => 'jarbrain_12_twocol_8_4',
    'admin css' => '../jarbrain_panels_admin_12.css',
    'regions' => array(
      'left' => t('Left side'),
      'right' => t('Right side')
    ),
  );

  return $items;
}
