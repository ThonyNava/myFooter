/* Paste this before <body> ends

<!-- Thony Nava Footer -->
<script src="https://thonynava.github.io/myFooter/thony-nava-footer.js"></script>

*/

let div = document.createElement('div');
div.innerHTML = '<!-- Footer - Thony Nava --> <div class="footerBox d-flexC"> <div class="footerBoxSolid d-flexC"> <p class="m-0 text-tn"> <a href="https://thonynava.github.io/me/" target="blank">Thony Nava</a> </p> </div> <div class="d-flexC"> <a class="iconBoxCircle d-flexC" href="https://thonynava.com" target="blank"> <img src="https://raw.githubusercontent.com/ThonyNava/me/master/img/isotipo-favicon.png" alt="Thony Nava Icon"> </a> </div> </div> <style> .d-flexC{ display: flex; justify-content: center; align-items: center; } .m-0{ margin: 0; } .footerBox{ position: fixed; top: 100%; -webkit-transform: translateY(-100%); -ms-transform: translateY(-100%); transform: translateY(-100%); margin-top: 3px; width: 100vw; flex-direction: column-reverse; } .iconBoxCircle{ margin-bottom: -7px; width: 14px; height: 14px; border-radius: 50%; box-shadow: 0 0 12px rgba(0, 220, 255, .6); position: relative; overflow: hidden; transition: 0.3s linear; } img{ width: 100%; } .footerBoxSolid{ box-shadow: inset 0px 0px 12px rgba(0,220,255,.6), 0 0 24px rgba(0,220,255,.6); border-radius: 50%/100% 100% 0 0; padding: 5px 0 5px 0; width: 100vw; position: relative; border-color: #2C5364 transparent transparent transparent; border-bottom: none; background: #1a202b; transition: 0.3s linear; } .footerBox:hover .footerBoxSolid{ box-shadow: inset 0px 0px 12px rgba(0,220,255,1), 0 0 24px rgba(0,220,255,1); transition: 0.3s linear; } .footerBox:hover .iconBoxCircle{ box-shadow: 0 0 12px rgba(0,220,255,1); transition: 0.3s linear; } .text-tn a{ font-family: Helvetica, sans-serif; font-size: 10px; color: white; text-decoration: none; } </style> <!--/ Footer - Thony Nava -->';
document.body.append(div);