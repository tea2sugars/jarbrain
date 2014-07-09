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

function jarbrain_node_view_alter(&$build) {

// unset($build['links']['node']['#links']['node-readmore']);

}


function jarbrain_css_alter(&$css){


  unset($css['misc/ui/jquery.ui.core.css']);
  unset($css['misc/ui/jquery.ui.theme.css']);
}

function jarbrain_form_alter(&$form, &$form_state, $form_id) {
  //if it is the exposed filter view
  if (($form_id == 'views_exposed_form_portfolio_portfolio_section') &&
          //for the view we care about
          ($form_state['view']->name == 'portfolio') &&
          //and the view display we care about
          ($form_state['view']->current_display == 'portfolio') &&
          //and on a taxonomy term page
          (arg(0) == 'taxonomy') && (arg(1) == 'term') && (is_int(arg(2)))) {
    //get the childern of the term
    if ($child_terms = taxonomy_get_children(arg(2))) {
      //only care about the tids
      $child_terms_tids = array();
      foreach ($child_terms as $child) {
        $child_terms_tids[] = $child->tid;
      }
      //for the exposed filter, alter the available options
      foreach ($form['field_related_services_tid']['#options'] as $tid => $term) {
        //is is a child term?
        if (in_array($tid, $child_terms_tids)) {
          //leave it
        } else {
          //remove it
          unset($form['field_related_services_tid']['#options'][$tid]);
        }
      }
    }
  }
}

/**
 * Display a single views grouping.
 */
function jarbrain_views_view_grouping($vars) {
  $view = $vars['view'];
  $title = $vars['title'];
  $content = $vars['content'];

  $output = theme('ctools_collapsible', array('handle' => $title, 'content' => $content, 'collapsed' => TRUE));

  return $output;
}

function jarbrain_preprocess_node(&$vars) {
}
