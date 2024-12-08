"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96710],{74985:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>p,data:()=>c});var n=a(6254),i=a(8483),s=a(57656),r=a(60229),l=a(74314);const o=a.p+"assets/img/CP2102.9b7919dc.png",d=a.p+"assets/img/CC2530_PI.5d76f9c5.jpg",A={},p=(0,a(89596).A)(A,[["render",function(e,t){return(0,n.uX)(),(0,n.CE)("div",null,t[0]||(t[0]=[(0,n.Fv)('<h1 id="connecting-the-cc2530" tabindex="-1"><a class="header-anchor" href="#connecting-the-cc2530"><span>Connecting the CC2530</span></a></h1><h2 id="pin-layouts" tabindex="-1"><a class="header-anchor" href="#pin-layouts"><span>Pin layouts</span></a></h2><p>The pin layout is different between each CC2530 module</p><table><thead><tr><th>Name</th><th>Pin layout</th><th>Picture</th></tr></thead><tbody><tr><td>CC2530</td><td><img src="'+i+'" alt="CC2530 pin layout"></td><td><img src="'+s+'" alt="CC2530"></td></tr><tr><td>Webee CC2530 + CC2591</td><td><img src="'+r+'" alt="Webee CC2530 + CC2591 pin layout"></td><td><img src="'+l+'" alt="CC2530 + CC2591"></td></tr></tbody></table><h2 id="using-a-usb-to-serial-adapter" tabindex="-1"><a class="header-anchor" href="#using-a-usb-to-serial-adapter"><span>Using a USB to serial adapter</span></a></h2><h3 id="confirmed-working" tabindex="-1"><a class="header-anchor" href="#confirmed-working"><span>Confirmed working</span></a></h3><p>This how-to has been confirmed working with the following CC2530 based devices:</p><table><thead><tr><th>Device</th><th>Image</th></tr></thead><tbody><tr><td><strong>CC2530</strong></td><td><img src="'+s+'" alt="CC2530"></td></tr></tbody></table><p>and the following USB to serial adapters:</p><table><thead><tr><th>Device</th><th>Image</th></tr></thead><tbody><tr><td><strong>CP2102</strong></td><td><img src="'+o+'" alt="CP2102"></td></tr></tbody></table><h5 id="flashing-the-firmware" tabindex="-1"><a class="header-anchor" href="#flashing-the-firmware"><span>Flashing the firmware</span></a></h5><p>The required coordinator firmware can be found here: <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_Home_1.2/bin" target="_blank" rel="noopener noreferrer">Zigbee 1.2</a> and <a href="https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.0.x/bin" target="_blank" rel="noopener noreferrer">Zigbee 3.0</a>.</p><h3 id="connecting" tabindex="-1"><a class="header-anchor" href="#connecting"><span>Connecting</span></a></h3><p>Connect to CC2530 to the USB to serial adapter using the following mapping:</p><table><thead><tr><th style="text-align:center;">USB-Serial Adapter</th><th style="text-align:center;">CC2530</th></tr></thead><tbody><tr><td style="text-align:center;">3V3</td><td style="text-align:center;">VCC</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">GND</td></tr><tr><td style="text-align:center;">TXD</td><td style="text-align:center;">P02</td></tr><tr><td style="text-align:center;">RXD</td><td style="text-align:center;">P03</td></tr></tbody></table><p>Now plug in the USB-to-serial adapter in your USB port and start Zigbee2MQTT, enjoy!</p><h2 id="to-a-raspberry-pi-zero" tabindex="-1"><a class="header-anchor" href="#to-a-raspberry-pi-zero"><span>To a Raspberry Pi (Zero)</span></a></h2><p>CC2530 can be connected to a Raspberry PI (Zero) via GPIO Pins - no USB2FTDI is needed.</p><p>The use of UART by the installed Linux has to be disabled: <a href="https://www.raspberrypi.org/documentation/configuration/uart.md" target="_blank" rel="noopener noreferrer">Detailed explanation here</a></p><p>Enable UART in the Kernel and disable UART use for BlueTooth.</p><p>In <code>/boot/config.txt</code> add following lines:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">enable_uart=1</span>\n<span class="line">dtoverlay=pi3-disable-bt</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Disable the modem system service (on the command line):</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">sudo systemctl disable hciuart</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Remove the console entry by removing any of those entries from <code>/boot/cmdline.txt</code> if present:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">console=serial0,115200 console=ttyAMA0,115200</span>\n<span class="line"></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Reboot your Raspberry.</p><h3 id="wiring-cc2530-to-the-raspberry" tabindex="-1"><a class="header-anchor" href="#wiring-cc2530-to-the-raspberry"><span>Wiring CC2530 to the Raspberry</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CC C2530 -&gt; Raspberry</span>\n<span class="line">VCC -&gt; 3,3V (Pin1)</span>\n<span class="line">GND -&gt; GND (Pin6)</span>\n<span class="line">P02 -&gt; TXD (Pin8 / BCM 14)</span>\n<span class="line">P03 -&gt; RXD (Pin10 / BCM 15)</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="'+d+'" alt="CC2531PI"></p><h3 id="configuring-zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#configuring-zigbee2mqtt"><span>Configuring Zigbee2MQTT</span></a></h3><p>Change the Serial Port in your <code>data/configuration.yaml</code> file:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">serial:</span>\n<span class="line">  port: /dev/ttyAMA0</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Have fun.</p><h2 id="via-an-esp8266-as-a-serial-to-wifi-bridge" tabindex="-1"><a class="header-anchor" href="#via-an-esp8266-as-a-serial-to-wifi-bridge"><span>Via an ESP8266 as a serial to WiFi bridge</span></a></h2><p>This setup allows you to connect a CC2530 to an ESP8266 which can be put everywhere in your house. Via a serial socket, Zigbee2MQTT will connect to your CC2530.</p><h3 id="wiring" tabindex="-1"><a class="header-anchor" href="#wiring"><span>Wiring</span></a></h3><p>Wire the CC2530 to the ESP8266 using the following scheme:</p><table><thead><tr><th style="text-align:center;">ESP8266</th><th style="text-align:center;">CC2530</th></tr></thead><tbody><tr><td style="text-align:center;">3v3</td><td style="text-align:center;">VCC</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">GND</td></tr><tr><td style="text-align:center;">TX</td><td style="text-align:center;">P02</td></tr><tr><td style="text-align:center;">RX</td><td style="text-align:center;">P03</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">P20</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">P04</td></tr><tr><td style="text-align:center;">GND</td><td style="text-align:center;">P05</td></tr></tbody></table><h3 id="option-1-flashing-the-esp8266-with-espeasy" tabindex="-1"><a class="header-anchor" href="#option-1-flashing-the-esp8266-with-espeasy"><span>Option 1 - Flashing the ESP8266 with ESPEasy</span></a></h3><p>The ESP8266 needs to be flashed with ESPEasy. ESPEasy has sufficient documentation on how to get you up and running:</p><ul><li><a href="https://www.letscontrolit.com/wiki/index.php?title=Tutorial_ESPEasy_Firmware_Upload" target="_blank" rel="noopener noreferrer">How to flash the ESP8266 with ESPEasy</a></li><li>ESP8266 firmware: <a href="https://github.com/letscontrolit/ESPEasy/releases" target="_blank" rel="noopener noreferrer">ESP_Easy_mega-XXXXXXXX_normal_ESP8266_4096.bin</a></li><li><a href="https://www.letscontrolit.com/wiki/index.php/ESPEasy#Introduction" target="_blank" rel="noopener noreferrer">More information about ESPEasy</a></li></ul><h3 id="setting-up-espeasy" tabindex="-1"><a class="header-anchor" href="#setting-up-espeasy"><span>Setting up ESPEasy</span></a></h3><p>Open the ESPEasy web interface and complete the setup. Afterwards open the web interface again.</p><p>Click on <em>Devices</em> Edit of the first task and select <em>Communication - Serial Server</em> from the dropdown list.</p><p>Fill in the form as following:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">a.    Name: ZIGBEE2MQTT</span>\n<span class="line">b.    Enabled: checked</span>\n<span class="line">c.    TCP Port: a number between 1000 and 9999 &quot;1775&quot;</span>\n<span class="line">d.    Baud Rate: 115200</span>\n<span class="line">e.    Data bits: 8</span>\n<span class="line">f.    Parity: No Parity</span>\n<span class="line">g.    Stop bits: 1</span>\n<span class="line">h.    Reset target after boot: - none –</span>\n<span class="line">i.    RX receive timeout: 0</span>\n<span class="line">j.    Event processing: Generic</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Press Submit, the setup is now completed.</p><h3 id="option-2-flashing-the-esp8266-with-tasmota" tabindex="-1"><a class="header-anchor" href="#option-2-flashing-the-esp8266-with-tasmota"><span>Option 2 - Flashing the ESP8266 with Tasmota</span></a></h3><p>The ESP8266 needs to be flashed with Tasmota firmware, <strong>&quot;zbbridge&quot; build</strong>. Please find flashing instructions in the following guides:</p><ul><li><a href="https://github.com/arendst/Tasmota" target="_blank" rel="noopener noreferrer">Tasmota github</a></li><li><a href="https://tasmota.github.io/docs/Getting-Started/" target="_blank" rel="noopener noreferrer">Getting started</a></li><li><a href="https://tasmota.github.io/docs/Serial-to-TCP-Bridge/" target="_blank" rel="noopener noreferrer">Serial to TCP Bridge docs</a></li></ul><p>You don&#39;t need MQTT for the serial to network functionality but it is a nice option to monitor your bridge.</p><h3 id="setting-up-tasmota" tabindex="-1"><a class="header-anchor" href="#setting-up-tasmota"><span>Setting up Tasmota</span></a></h3><p>Open the Tasmota web interface and complete the basic network setup. Next in &quot;Configuration&quot;, &quot;Configure Module&quot; define your RX and TX pins. The Rx/Tx are relative to the ESP device. For example with ESP8266/ESP01&#39;s hardware serial, set GPIO1 as <code>TCP Tx</code> and GPIO3 as <code>TCP Rx</code>.</p><p>Next, in Tasmota&#39;s main screen, open &quot;Console&quot;. Enter <code>TCPBaudRate 115200</code>. Decide on the port number to use and set it. For example for port = 8888 run:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Rule1 ON System#Boot do TCPStart 8888 endon</span>\n<span class="line">Rule1 1</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="zigbee2mqtt-configuration" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt-configuration"><span>Zigbee2MQTT configuration</span></a></h3><p>Now add the following to the Zigbee2MQTT <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">serial</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token string">&#39;tcp://192.168.2.13:20108&#39;</span></span>\n<span class="line">    <span class="token key atrule">adapter</span><span class="token punctuation">:</span> zstack</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note to change the IP address and port. You can now start Zigbee2qmtt.</p>',60)]))}]]),c=JSON.parse('{"path":"/guide/adapters/flashing/connecting_cc2530.html","title":"Connecting the CC2530","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Pin layouts","slug":"pin-layouts","link":"#pin-layouts","children":[]},{"level":2,"title":"Using a USB to serial adapter","slug":"using-a-usb-to-serial-adapter","link":"#using-a-usb-to-serial-adapter","children":[{"level":3,"title":"Confirmed working","slug":"confirmed-working","link":"#confirmed-working","children":[]},{"level":3,"title":"Connecting","slug":"connecting","link":"#connecting","children":[]}]},{"level":2,"title":"To a Raspberry Pi (Zero)","slug":"to-a-raspberry-pi-zero","link":"#to-a-raspberry-pi-zero","children":[{"level":3,"title":"Wiring CC2530 to the Raspberry","slug":"wiring-cc2530-to-the-raspberry","link":"#wiring-cc2530-to-the-raspberry","children":[]},{"level":3,"title":"Configuring Zigbee2MQTT","slug":"configuring-zigbee2mqtt","link":"#configuring-zigbee2mqtt","children":[]}]},{"level":2,"title":"Via an ESP8266 as a serial to WiFi bridge","slug":"via-an-esp8266-as-a-serial-to-wifi-bridge","link":"#via-an-esp8266-as-a-serial-to-wifi-bridge","children":[{"level":3,"title":"Wiring","slug":"wiring","link":"#wiring","children":[]},{"level":3,"title":"Option 1 - Flashing the ESP8266 with ESPEasy","slug":"option-1-flashing-the-esp8266-with-espeasy","link":"#option-1-flashing-the-esp8266-with-espeasy","children":[]},{"level":3,"title":"Setting up ESPEasy","slug":"setting-up-espeasy","link":"#setting-up-espeasy","children":[]},{"level":3,"title":"Option 2 - Flashing the ESP8266 with Tasmota","slug":"option-2-flashing-the-esp8266-with-tasmota","link":"#option-2-flashing-the-esp8266-with-tasmota","children":[]},{"level":3,"title":"Setting up Tasmota","slug":"setting-up-tasmota","link":"#setting-up-tasmota","children":[]},{"level":3,"title":"Zigbee2MQTT configuration","slug":"zigbee2mqtt-configuration","link":"#zigbee2mqtt-configuration","children":[]}]}],"git":{"updatedTime":1733669144000},"filePathRelative":"guide/adapters/flashing/connecting_cc2530.md"}')},57656:(e,t,a)=>{e.exports=a.p+"assets/img/cc2530.3b0e534a.jpg"},74314:e=>{e.exports="data:image/jpeg;base64,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"},8483:(e,t,a)=>{e.exports=a.p+"assets/img/cc2530_pin_layout.d28e67d9.png"},60229:(e,t,a)=>{e.exports=a.p+"assets/img/webee_cc2530_cc2591_pinlayout.c476b9b5.png"}}]);