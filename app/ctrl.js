angular.module('heatmap.controller', [])
	.controller('mainCtrl', function($scope, $sce, $q, Fetch) {
		$scope.mailbody = $sce.trustAsHtml('<div id="map"><table class="layout-outer" border="0" cellpadding="0" cellspacing="0" align="center" width="100%" style="background:#9e9e9e;"><tr><td valign="top"><div id="mnm-header"><table class="layout-table" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td class="column" style="padding:10px;text-align:left;" width="50%"><div class="layout-links preheader" style="color: rgb(255, 255, 255); font-size: 12px; font-family: Geneva;"></div></td><td class="column" style="padding:10px;text-align:right;" width="50%"><a class="layout-links" data-ignore-stats="" href="http://ext.mnm.as/r/023476B0-929B-4C3D-A3C1-4442746D6CD0" title="webversion_link" style="color: rgb(255, 255, 255); font-size: 12px; font-family: Geneva;" data-id="0">Se webversjon </a></td></tr></tbody></table></div><div class="" id="mnm-layoutblocks"><div class="layoutblock" data-id="mnm1426234765086"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 48px 0px 0px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/ucitsdeugutprmygcfyey.png" class="picture-reg" alt="" width="203"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/xzcfinkugyteujuitnkjg.png" class="picture-reg" width="406"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class="layoutblock" data-id="mnm1426236251715"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="610"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1426258523617" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="text" style="padding: 5px 20px; color: rgb(51, 51, 51); font-size: 14px; font-family: Geneva; line-height: 19px;"><div style="text-align: center;" align="center"><b><a href="http://www.oslogk.no/oslo-gk/golfbanen/banestatus/" data-id="1" style="font-size: 12px; line-height: 140%; color: rgb(107, 107, 120);">Banestatus</a>        <span style="font-size: 12px;"></span><a href="http://www.oslogk.no/oslogolf/turneringer/" data-id="2" style="font-size: 12px; line-height: 140%; color: rgb(107, 107, 120);">Turneringer</a>          <span style="font-size: 12px;"> </span><a href="http://www.oslogk.no/oslogolf/medlem/" data-id="3" style="font-size: 12px; line-height: 140%; color: rgb(107, 107, 120);">Medlem</a>  <span style="font-size: 12px;">        <a style="color: rgb(107, 107, 120);" data-id="4" href="http://www.oslogk.no/oslogolf/kurs-og-trening/">Kurs/trening</a>          <a style="color: rgb(107, 107, 120);" data-id="5" href="http://www.oslogk.no/oslogolf/kurs-og-trening/juniorsiden/">Juniorsiden</a>          <a style="color: rgb(107, 107, 120);" data-id="6" href="http://www.oslogk.no/oslogolf/kontakt/">Kontakt</a></span></b></div></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class="layoutblock" data-id="mnm1426235088170"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(235, 235, 235);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 4px 20px 2px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;">Informasjon fra Oslo Golfklubb</h2></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1426511231586" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 4px 20px 17px 19px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 14px 0px 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/qlvlejvtpaexrntfynqgf.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 5px 20px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;">Det er din bane!<br></h2></td></tr><tr><td class="text" style="padding: 5px 20px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span><span></span><span>Oslo Golfklubb trenger din hjelp til å ivareta kvaliteten på banen. Ved noen enkle grep kan du bidra til at spilleopplevelsen opprettholdes. </span><br><span>Det er din bane! Men den er også mer enn det<span style="text-decoration: underline;">,</span> den tilhører også 2200 andre aktive og passive medlemmer. Den skal være til glede for alle også våre samarbeidspartnere, gjester og greenfeespillere. <br><a data-id="7" href="http://www.oslogk.no/oslogolf/sysmappe-oslogolf/nyheter-detalj-oslogolf/?tx_ttnews[tt_news]=2824&amp;tx_ttnews[backPid]=6&amp;cHash=aa91311333">Vis derfor hensyn og følg de enkle påbud.  </a></span><br></span></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1430229260553" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px 11px 5px 21px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class="layoutblock" data-id="mnm1426235321395"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 10px 0px 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/wtrsteqstsvulvathoemz.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;">Driving rangen - åpen<br></h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span></span><span>Driving rangen er nå åpen for spill til tross for at en del arbeid gjenstår. Når været tillater utrulling av det resterende ferdiggresset vil rangen midlertidig stenges for spill.</span><span> Klubben vil prøve så godt det lar seg gjøre å tilpasse aktivitet på driving rangen parallelt med videre fremdrift. </span><br>Ny status gjøres opp i morgen (torsdag 4. juni) og vil bli lagt ut på nettsiden.<br><a data-id="8" href="http://www.oslogk.no/oslogolf/sysmappe-oslogolf/nyheter-detalj-oslogolf/?tx_ttnews[tt_news]=2823&amp;tx_ttnews[backPid]=6&amp;cHash=b1863f628c">Mer informasjon om driving rangen</a><br></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1430297058509" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 5px 20px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1430297054959" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/nnnwlrerxttrasmzrbvdb.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;"><span><span>Bestill mat ved 17. tee</span></span></h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span><span></span></span><span>Er du sulten etter en runde golf?<br><br></span><span>Restauranten utvider i år sitt tilbud slik at du kan sørge for at maten står klar når du har spilt en runde på Oslo Golfklubb. <br>Ved 17. tee er det satt opp et skilt med årets meny og telefonnummer (tlf. 467 60 090) du kan ringe for å bestille.</span><span><br><br></span><br></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1432033059264" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 5px 20px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1429693663904" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/ldeekbhkldqvxtdqwwxft.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;"><span>Bestill en protime i GolfBox</span></h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span><span><span>Klubbens trenerteam har lagt til rette for a</span></span>t medlemmer og andre golfere skal kunne bestille protime i GolfBox. <span> I GolfBox finner du tilgjengelige timer ved å velge "Leksjon" i menyen til venstre (like nedenfor "Starttidsbestilling").</span><br><br><span><span>I Pro Shop, like til høyre for inngangsdøren, er det satt opp en egen skjerm som du kan benytte til formålet.</span><br><br><a data-id="9" href="http://www.oslogk.no/oslogolf/sysmappe-oslogolf/nyheter-detalj-oslogolf/?tx_ttnews[tt_news]=2816&amp;tx_ttnews[backPid]=6&amp;cHash=bda8b0e8ee">Les mer om klubbens protime-tilbud</a>.<br><br></span><br><br></span></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1430229498387" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 5px 20px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1430230322443" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 10px 0px 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/xkojuzieqewpptxfrcntc.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;">Rimelig spill på 10 golfbaner</h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span></span><span>Det er fortsatt mulig å kjøpe greenfeeheftet!<br>Oslo Golfklubb har også i år gått sammen med 10 andre klubber om salget av greenfeehefter. Klubben selger 50 hefter og prisen er kr. 1700,-  per stk (inkluderer ikke billetten på Oslo GK). </span><br><br><span>Heftet inneholder én greenfeebillett til spill på følgende baner: Bærum, Tyrifjord, Drøbak, Nøtterøy, Moss &amp; Rygge, Borre, Hakkadal, Mørk, Drammen og Haga.</span><br><br><span>Salget skjer etter "Første mann til mølla" prinsippet.</span> Bestill ved å sende en e-post til <a data-id="10" href="mailto:vik@oslogk.no">vik@oslogk.no</a>.<br><br><a data-id="11" href="http://www.oslogk.no/oslogolf/sysmappe-oslogolf/nyheter-detalj-oslogolf/?tx_ttnews%5Bpointer%5D=1&amp;tx_ttnews%5Btt_news%5D=2798&amp;tx_ttnews%5BbackPid%5D=1295&amp;cHash=c1abdcab6f">Mer informasjon om greenfeeheftet.</a><br><br></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1426511242489" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 5px 20px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1432033054856" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/opptlrgikcovrfmjkbckz.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;"><span></span><span>Ukens juniorrett i restauranten</span></h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span><span></span><span>Alle golfere i alderen opp til 15 år kan nå spise seg mette for kr. 75,- i restauranten. <br>I inneværende uke serveres det lasagne med salat. Uken deretter er det Tacopizza som står på menyen.  <br><br>Tilbudet for klubbens yngre garde fortsetter utover i sesongen.</span><br></span></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1433325469617" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 5px 20px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1431087542943" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/vlghlcxozmcgkxwynhpll.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;">Bli med på kommende turneringer<br></h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span><span style="font-weight: bold;">Uttak til Hovedstadsmatchen</span><br><span>De to neste Torsdagsmatchene dvs. 4. og 11. juni vil fungere som uttak til Hovedstadsmatchen.  I år spilles  Hovedstads-matchen i Helsinki 11. og 12. juli.</span><br><a data-id="12" href="http://www.oslogk.no/oslogolf/sysmappe-oslogolf/nyheter-detalj-oslogolf/?tx_ttnews[pointer]=1&amp;tx_ttnews[tt_news]=2813&amp;tx_ttnews[backPid]=1295&amp;cHash=ab8c87a8a3">Mer om Hovedstadsmatchen</a><br><br>Andre turneringer som arrangeres i juni er blant andre <span style="font-weight: bold;">Sankthanspokalen, Big Horn Manndomsprøven,</span> <span style="font-weight: bold;">Midnight Cup</span> og <span style="font-weight: bold;">The International Throphy</span>. Meld deg på og bli med!<br></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1430230325403" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 5px 20px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="570"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div data-id="mnm1433325466090" class="layoutblock"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 5px 20px 10px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr style="" class=""><td class="contentblock" style="padding: 0px;" valign="top" width="33%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img alt="" src="https://files.makenewsmail.com/6944/picture_library/610/xsuksiebqavwgjlmbhaxr.png" class="picture-reg" width="190"></td></tr></tbody></table></td><td class="contentblock" style="padding: 0px;" valign="top" width="66%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="title" style="padding: 0px 20px 3px;"><h2 style="color: rgb(0, 50, 108); font-size: 18px; font-family: Arial; line-height: 21px; margin: 0px; font-weight: bold;">Vil vil fortsatt ha din gamle mobil!</h2></td></tr><tr><td class="text" style="padding: 5px 20px 0px; color: rgb(107, 107, 120); font-size: 12px; font-family: Arial; line-height: 16px;"><span>Bli kvitt dine gamle mobiltelefoner! I klubbhuset er det satt ut mottaksbager (se bildet til venstre) lett tilgjengelig både ved administrasjonen, i restauranten og i Pro Shop.<br>Ved å levere inn din gamle mobil til Oslo Golfklubb støtter du junioravdelingen med kr. 30,-.<br><br><b>Takk til alle som bidrar!</b><br></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class="layoutblock" data-id="mnm1426238327727"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(255, 255, 255);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 0px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="picture" style="padding: 0px; font-size: 0px;"><img src="https://files.makenewsmail.com/6944/picture_library/610/wngksfoltuxkeabuygzji.png" class="picture-reg" alt="" width="610"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div><div class="layoutblock" data-id="mnm1426237913247"><table class="layoutblock-outer" style="border-collapse: separate; background-color: rgb(158, 158, 158);" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class=""><table class="layoutblock-inner" style="border-collapse: separate; margin: 0px auto; background-color: rgb(235, 235, 235);" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding: 10px 20px;"><table style="border-collapse:separate;" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr class=""><td class="contentblock" style="padding: 0px;" valign="top" width="100%"><table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="social-follow" style="padding: 5px 20px; text-align: center;"><a href="http://www.oslogk.no/index.php" style="margin:0 5px;" title="webpage" data-id="13"><img src="https://files.makenewsmail.com/iconset/2/webpage.png" alt=""></a><a href="http://www.facebook.com/pages/OGK-JUNIOR/322440853512?ref=ts" style="margin:0 5px;" title="facebook" data-id="14"><img src="https://files.makenewsmail.com/iconset/2/facebook.png" alt=""></a></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></div></div><div id="mnm-footer" class=""><table class="layout-table" align="center" border="0" cellpadding="0" cellspacing="0" width="610"><tbody><tr><td style="padding:10px;" align="center"><div class="layout-links company_info" style="color: rgb(255, 255, 255); font-size: 12px; font-family: Geneva;">Oslo Golfklubb - Ankerveien 127, 0766 Oslo Norge</div><a class="layout-links" data-ignore-stats="" href="" title="unsubscribe_link" style="color: rgb(255, 255, 255); font-size: 12px; font-family: Geneva;" data-id="15">Klikk her dersom du ikke lenger ønsker å motta dette nyhetsbrevet </a></td></tr><tr><td style="padding:10px;" align="center"><a class="layout-links" href="http://www.makenewsmail.no" title="powered_by_link" style="color: rgb(255, 255, 255); font-size: 12px; font-family: Geneva;" data-id="16">Powered by Make Newsmail</a></td></tr></tbody></table></div></td></tr><tr><td class="gmail-app-fix"><img src="http://files.makenewsmail.com/pixel.gif" alt="" height="1px"  width="640px" style="max-height:1px; min-height:1px; display:block; width:640px; min-width:640px;"/></td></tr></table><img src="http://view.mnm.as/[QUEID]-6944-[EPOSTID]-[MAILID].gif" alt="" /></div>');

		Fetch.get().then(function(res) {
			$scope.arrLinks = res;
		});
	});