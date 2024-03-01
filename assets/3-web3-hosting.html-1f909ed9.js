import{_ as a,r as n,o as l,c as r,b as e,e as t,d as o,w as d,a as h}from"./app-c32f55b8.js";const p={},c=e("h1",{id:"web3-hosting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web3-hosting","aria-hidden":"true"},"#"),t(" Web3 Hosting")],-1),u=e("p",null,"Apillon Web3 Hosting is a Web3-based storage service that allows you to increase the accessibility of your website or app and make it unstoppable, as it gets hosted on a decentralized network of nodes worldwide.",-1),g={href:"https://ipfs.tech/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://crust.network/",target:"_blank",rel:"noopener noreferrer"},w=h('<h2 id="website-app-hosting" tabindex="-1"><a class="header-anchor" href="#website-app-hosting" aria-hidden="true">#</a> Website/app hosting</h2><p><strong>Note</strong>: At this point, only hosting of static websites is supported in Apillon Web3 Hosting service, while dynamic websites will be supported in future versions of Apillon.</p><p>The process below describes how a static website or app is hosted decentrally with Apillon Web3 Hosting.</p><ol><li>Uploaded files land on a reputable centralized cloud provider to ensure fast file capture.</li><li>Once the files are received, they proceed to the Apillon node. They are accessible through the IPFS gateway until moved from staging to production.</li><li>Once the files move from staging to production, they proceed to the decentralized Apillon IPFS gateway, where the pinning and replication process is started with Crust.</li><li>At this point, a custom domain can be connected to the website/app, which starts the SSL certificate generation process in the Apillon gateway.</li><li>Finally, the domain’s DNS records can be migrated to Apillon, and website or app can be launched using decentralized hosting.</li></ol><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment" aria-hidden="true">#</a> Deployment</h2><p>To deploy a Web3 website or application, follow the process below:</p>',6),b={href:"https://app.apillon.io/register",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,"Log in to your Apillon dashboard.",-1),m=e("li",null,'In the menu on the left, under Services, navigate to Hosting, and click "Get started."',-1),y=e("li",null,"Drag and drop your static website to the Hosting view and wait for the upload to finish.",-1),v=e("li",null,'Once the upload is complete and the status turns to "successful," you can deploy the website to Staging.',-1),k=e("li",null,"Click on the Staging tab to monitor the progress.",-1),A=e("li",null,'Deployment of web files will go through several statuses, ending with "successful."',-1),x=e("li",null,'Click "Deploy to production" to get files replicated and unstoppable with decentralized hosting.',-1),S=e("li",null,'Once the deployment to production is finished, click "Add domain" and "Configure domain" to make the domain you own point to the Apillon hosting.',-1),I=e("li",null,"Once DNS is updated, your unstoppable website will become available on the connected domain.",-1),H=e("p",null,"If you want to redeploy the website or app with new changes, repeat the process above simply by uploading the whole website or app via Apillon Hosting view.",-1),C=e("p",null,[e("strong",null,"Note:"),t(" Repeat deployment to Apillon Hosting will continue spending the Hosting storage capacity. However, every 3 months, the capacity will be renewed after older versions are deleted.")],-1),N={href:"https://blog.apillon.io/faq-apillon-web3-hosting-81d5477661e7",target:"_blank",rel:"noopener noreferrer"},W=e("h2",{id:"file-deletion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#file-deletion","aria-hidden":"true"},"#"),t(" File deletion")],-1),z=e("p",null,"Each file hosting that passes through Crust’s pinning and replication service is paid upfront for a minimum period of 6 months. Apillon has no control over amending that period, so keep in mind that all files you deploy to Apillon storage buckets will remain accessible for that period of time.",-1),D=e("p",null,"If you decide to delete a file before the 6-month period expires, the file is marked for deletion. This means that Apillon does not extend the storage lease on Crust once the 6-month period expires, which leads to file deletion on all IPFS instances.",-1),F=e("p",null,"However, to make the hosting service more dynamic, Apillon artificially lowers the file deletion period to 3 months. Once this period expires, the load of deleted files in your storage bucket is emptied, and the storage capacity is made available for uploading new files and redeployment of website or app.",-1),L=e("strong",null,"Note",-1),T={href:"https://discord.gg/yX3gTw36C4",target:"_blank",rel:"noopener noreferrer"};function O(P,B){const s=n("RouterLink"),i=n("ExternalLinkIcon");return l(),r("div",null,[c,u,e("p",null,[t("Decentralized hosting of a website or an app on Apillon is very similar to the usage of storage buckets in "),o(s,{to:"/web3-services/1-good-to-know.html#web3-storage"},{default:d(()=>[t("decentralized storage")]),_:1}),t(". It implements AWS S3 (as cache to optimize upload of large files), "),e("a",g,[t("IPFS"),o(i)]),t(", and "),e("a",f,[t("Crust Network"),o(i)]),t(" (to pin files on multiple IPFS nodes).")]),w,e("ol",null,[e("li",null,[t("Register an "),e("a",b,[t("account on Apillon"),o(i)]),t(".")]),_,m,y,v,k,A,x,S,I]),H,C,e("p",null,[t("Learn more: "),e("a",N,[t("Web3 Hosting FAQ"),o(i)])]),W,z,D,F,e("p",null,[L,t(": In the Apillon Closed Beta stage, single file changes are not supported. Instead, hosting is treated as batch upload, meaning that with every new version of a website or app, its contents are rewritten, which leads to new files getting pinned and replicated on Crust. This limitation will be improved in future dashboard updates to enhance the developer experience. In case you need a larger storage capacity, feel free to get in touch on "),e("a",T,[t("Apillon Discord"),o(i)]),t(", and we will grant you extra space or more storage buckets.")])])}const R=a(p,[["render",O],["__file","3-web3-hosting.html.vue"]]);export{R as default};
