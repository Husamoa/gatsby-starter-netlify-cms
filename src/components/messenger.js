import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat'

const MessengerChat = () => (
  <MessengerCustomerChat
    pageId="647906501936249"
    appId="EAALpNFhDhLYBABbFCxJRMaPZBV2ocVW1kiTQpxGOW91HPRjeZAyfKO3vi9Rk5Rgza5kZBXpCNbryQIEFx5hX5vd6tt23Mj5ToXUvSgq23BjsOSoA7cW28SKsmNJ5YkfrwNAvTGHmoCYUBVPvudawdlc7COUb6kfoGJ1UlYVKAZDZD"
    htmlRef={window.location.pathname}
    theme_color="#67b868"
    logged_in_greeting="Witamy na czacie Tenisa Stołowego Dźwiękowego :) W czym możemy pomóc?"
    logged_out_greeting="Witamy na czacie Tenisa Stołowego Dźwiękowego :) W czym możemy pomóc?"
  />
)

export default MessengerChat

/*{
  <!-- Load Facebook SDK for JavaScript -->
      <div id="fb-root"></div>
      <script>
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v5.0'
          });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));</script>

      <!-- Your customer chat code -->
      <div class="fb-customerchat"
        attribution=setup_tool
        page_id="647906501936249"
  theme_color="#67b868"
  logged_in_greeting="Witamy na czacie Tenisa Stołowego Dźwiękowego :) W czym możemy pomóc?"
  logged_out_greeting="Witamy na czacie Tenisa Stołowego Dźwiękowego :) W czym możemy pomóc?">
      </div>
}*/
