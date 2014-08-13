<?php

/**
 * Implements hook_panels_layouts().
 */
function jarbrain_jarbrain_12_twocol_8_4_1_panels_layouts() {
  $items['jarbrain_12_twocol_8_4_1'] = array(
    'title' => t('Two Column 8-4_1'),
    'category' => t('Jarbrain: 12 Column Grid'),
    'icon' => 'jarbrain_12_twocol_8_4_1.png',
    'theme' => 'jarbrain_12_twocol_8_4_1',
    'admin css' => '../jarbrain_panels_admin_12.css',
    'regions' => array(
      'left' => t('Left side'),
      'right' => t('Right side'),
      'left_1' => t('Left 1 side'),
      'left_7' => t('Left 7 side')
    ),
  );

  return $items;
}
