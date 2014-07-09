function makeArray(len) {
for (var i = 0; i < len; i++) this[i] = null;
this.length = len;
}

// you add as many quotes as you want here just make sure to change the makeArray(number)

ideas = new makeArray(14);
ideas[0]  = "With a Black Jack, you can survive any kinds of black holes...<br><br><DIV ALIGN=RIGHT>--Mikka Katajamäki</div>"
ideas[1]  = "Look but dont touch... touch but dont taste... taste but dont swallow...<br><br><DIV ALIGN=RIGHT>-- John Milton in 'The Devil's Advocate', (1997)</div>"
ideas[2]  = "No doubt about it, she will return...<br><br><DIV ALIGN=RIGHT>-- anonymous</div>"
ideas[3]  = "It only take one tree to make a thousand matches. It only takes one match to burn a thousand trees.<br><br><DIV ALIGN=RIGHT>-- Stereophonics</div>"
ideas[4]  = "Dream as if you'll live forever, live as if you'll die today'<br><br><DIV ALIGN=RIGHT>-- James Dean</div>"
ideas[5]  = "It's not true that life is one damn thing after another; it is one damn thing over and over.<br><br><DIV ALIGN=RIGHT>-- Edna St. Vincent Millay</div>"
ideas[6]  = "I have spread my dreams under your feet Tread Softly, Because You Tread On My Dreams<br><br><DIV ALIGN=RIGHT>-- William Butler Yeat</div>";
ideas[7]  = "There are levels of survival we are prepared to accept. However, the relevant issue is whether or not you are ready to accept the responsibility for the death of every human being in this world.<br><br><DIV ALIGN=RIGHT>The Architect in 'The Matrix Reloaded', (2003)</div>"
ideas[8]  = "Battle not with monsters lest ye become a monster and if you gaze into the abyss the abyss gazes into you.<br><br><DIV ALIGN=RIGHT>-- Friedrich Nietzsche</div>";
ideas[9]  = "My mommy always said there were no monsters - no real ones - but there are, aren't there? <br><br><DIV ALIGN=RIGHT>Newt in 'Aliens', (1986)</div>"
ideas[10] = "We need men who can dream of things that never were<br><br><DIV ALIGN=RIGHT>John F. Kennedy. (1917 - 1963)</div>"
ideas[11] = "I would never die for my beliefs because I might be wrong...<br><br><DIV ALIGN=RIGHT>Bertrand Russell (1872 - 1970)</div>"
ideas[12] = "Hope is a waking dream<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[13] = "I do not want to die... until I have faithfully made the most of my talent and cultivated the seed that was placed in me until the small twig has grown<br><br><DIV ALIGN=RIGHT>Henry Bromel in Northen Exposure, The Big Kiss. (1991)</div>"
ideas[14] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[15] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[16] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[17] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[18] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[19] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[20] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"
ideas[21] = "New quote<br><br><DIV ALIGN=RIGHT>the author</div>"

// The random number generator.
function rand(n) {
seed = (0x015a4e35 * seed) % 0x7fffffff;
return (seed >> 16) % n;
}
var now = new Date()
var seed = now.getTime() % 0xffffffff
////////////////////////////////////////////////////////////////////////////