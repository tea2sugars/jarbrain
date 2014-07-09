<article<?php print $attributes; ?>>

<?php if ($submitted) { ?>
<span class="submitted">
<?php  if ($node->type == 'blog') {
       print 'Posted ' . format_date($node->created, 'custom', "F jS, Y") . ' by ' . theme('username', $node);
       }
       else {
       print 'By ' . theme('username', $node) . ' <br /> ' . format_date($node->created, 'custom', "F jS, Y") ;
       }       
?>
</span>
<?php } ?>

  <?php print $user_picture; ?>
  <?php if ($display_submitted): ?>
  <footer class="submitted"><?php print $date; ?> -- <?php print $name; ?></footer>
  <?php endif; ?>

  <div<?php print $content_attributes; ?>>
    <?php
      // We hide the comments and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      print render($content);
    ?>
  </div>

  <div class="clearfix">
    <?php if (!empty($content['links'])): ?>
      <nav class="links node-links clearfix"><?php print render($content['links']); ?></nav>
    <?php endif; ?>

    <?php print render($content['comments']); ?>
  </div>
</article>
