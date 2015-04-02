<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */
 
function jarbrain_breadcrumb($breadcrumb) {
  $links = array();
  $path = '';
  

// Get URL arguments
  $arguments = explode('/', request_uri());
  

// Remove empty values
  foreach ($arguments as $key => $value) {
    if (empty($value)) {
      unset($arguments[$key]);
    }
  }
  $arguments = array_values($arguments);
  

// Add 'Home' link
  $links[] = l(t('Home'), '<front>');
  

// Add other links
  if (!empty($arguments)) {
    foreach ($arguments as $key => $value) {
      // Don't make last breadcrumb a link
      if ($key == (count($arguments) - 1)) {
        $links[] = drupal_get_title();
      } else {
        if (!empty($path)) {
          $path .= '/'. $value;
        } else {
          $path .= $value;
        }
        $links[] = l(drupal_ucfirst($value), $path);
      }
    }
  }
  

// Set custom breadcrumbs
  drupal_set_breadcrumb($links);
  

// Get custom breadcrumbs
  $breadcrumb = drupal_get_breadcrumb();
  

// Hide breadcrumbs if only 'Home' exists
  if (count($breadcrumb) > 1) {
    return '<div class="breadcrumb">'. implode(' &raquo; ', $breadcrumb) .'</div>';
  }
}
?>