"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[26301],{2866:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>d});var a=t(6254);const l={},c=(0,t(89596).A)(l,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"easyaccess-easycode903g2-1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#easyaccess-easycode903g2-1"},[(0,a.Lk)("span",null,"EasyAccess EasyCode903G2.1")])],-1)),(0,a.Lk)("table",null,[o[7]||(o[7]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"EasyCode903G2.1")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=EasyAccess"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("EasyAccess")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"EasyFinger V2")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"lock (state, lock_state), battery, sound_volume, action, auto_relock, linkquality")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/EasyCode903G2.1.png",alt:"EasyAccess EasyCode903G2.1"})])],-1)),o[6]||(o[6]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"White-label"),(0,a.Lk)("td",null,"Datek Wireless EasyCode903G2.1")],-1))])]),o[9]||(o[9]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="lock" tabindex="-1"><a class="header-anchor" href="#lock"><span>Lock</span></a></h3><p>The current state of this lock is in the published state under the <code>state</code> property (value is <code>LOCK</code> or <code>UNLOCK</code>). To control this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;LOCK&quot;}</code> or <code>{&quot;state&quot;: &quot;UNLOCK&quot;}</code>. To read the current state of this lock publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>. This lock exposes a lock state which can be found in the published state under the <code>lock_state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>not_fully_locked</code>, <code>locked</code>, <code>unlocked</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sound-volume-enum" tabindex="-1"><a class="header-anchor" href="#sound-volume-enum"><span>Sound volume (enum)</span></a></h3><p>Sound volume of the lock. Value can be found in the published state on the <code>sound_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sound_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sound_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>silent_mode</code>, <code>low_volume</code>, <code>high_volume</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>zigbee_unlock</code>, <code>lock</code>, <code>rfid_unlock</code>, <code>keypad_unlock</code>.</p><h3 id="auto-relock-binary" tabindex="-1"><a class="header-anchor" href="#auto-relock-binary"><span>Auto relock (binary)</span></a></h3><p>Auto relock after 7 seconds.. Value can be found in the published state on the <code>auto_relock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_relock&quot;: NEW_VALUE}</code>. If value equals <code>true</code> auto relock is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13))])}]]),d=JSON.parse('{"path":"/devices/EasyCode903G2.1.html","title":"EasyAccess EasyCode903G2.1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"EasyAccess EasyCode903G2.1 control via MQTT","description":"Integrate your EasyAccess EasyCode903G2.1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-05-01T14:47:09.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Lock","slug":"lock","link":"#lock","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Sound volume (enum)","slug":"sound-volume-enum","link":"#sound-volume-enum","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Auto relock (binary)","slug":"auto-relock-binary","link":"#auto-relock-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1733669144000},"filePathRelative":"devices/EasyCode903G2.1.md"}')}}]);