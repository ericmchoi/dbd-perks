!function(){"use strict";const e=1599607826159,s="cache"+e,n=["client/about.68f63a4d.js","client/index.12a2e9df.js","client/client.6ce0157a.js","client/index.31533cf5.js"].concat(["service-worker-index.html","global.css","images/perks/iconPerks_BBQAndChili.png","images/perks/iconPerks_BeastOfPrey.png","images/perks/iconPerks_DeadHard.png","images/perks/iconPerks_HuntressLullaby.png","images/perks/iconPerks_NoMither.png","images/perks/iconPerks_TerritorialImperative.png","images/perks/iconPerks_WereGonnaLiveForever.png","images/perks/iconPerks_aNursesCalling.png","images/perks/iconPerks_aceInTheHole.png","images/perks/iconPerks_adrenaline.png","images/perks/iconPerks_aftercare.png","images/perks/iconPerks_agitation.png","images/perks/iconPerks_alert.png","images/perks/iconPerks_anyMeansNecessary.png","images/perks/iconPerks_autodidact.png","images/perks/iconPerks_babySitter.png","images/perks/iconPerks_balancedLanding.png","images/perks/iconPerks_bamboozle.png","images/perks/iconPerks_betterTogether.png","images/perks/iconPerks_bitterMurmur.png","images/perks/iconPerks_bloodEcho.png","images/perks/iconPerks_bloodPact.png","images/perks/iconPerks_bloodWarden.png","images/perks/iconPerks_bloodhound.png","images/perks/iconPerks_boilOver.png","images/perks/iconPerks_bond.png","images/perks/iconPerks_borrowedTime.png","images/perks/iconPerks_botanyKnowledge.png","images/perks/iconPerks_breakdown.png","images/perks/iconPerks_breakout.png","images/perks/iconPerks_brutalStrength.png","images/perks/iconPerks_buckleUp.png","images/perks/iconPerks_calmSpirit.png","images/perks/iconPerks_camaraderie.png","images/perks/iconPerks_corruptIntervention.png","images/perks/iconPerks_coulrophobia.png","images/perks/iconPerks_cruelConfinement.png","images/perks/iconPerks_danceWithMe.png","images/perks/iconPerks_darkDevotion.png","images/perks/iconPerks_darkSense.png","images/perks/iconPerks_deadManSwitch.png","images/perks/iconPerks_deathbound.png","images/perks/iconPerks_decisiveStrike.png","images/perks/iconPerks_deerstalker.png","images/perks/iconPerks_dejaVu.png","images/perks/iconPerks_deliverance.png","images/perks/iconPerks_detectivesHunch.png","images/perks/iconPerks_devourHope.png","images/perks/iconPerks_discordance.png","images/perks/iconPerks_distortion.png","images/perks/iconPerks_distressing.png","images/perks/iconPerks_diversion.png","images/perks/iconPerks_dyingLight.png","images/perks/iconPerks_empathy.png","images/perks/iconPerks_enduring.png","images/perks/iconPerks_fireUp.png","images/perks/iconPerks_fixated.png","images/perks/iconPerks_flipFlop.png","images/perks/iconPerks_forThePeople.png","images/perks/iconPerks_forcedPenance.png","images/perks/iconPerks_franklinsLoss.png","images/perks/iconPerks_furtiveChase.png","images/perks/iconPerks_gearHead.png","images/perks/iconPerks_generatorOvercharge.png","images/perks/iconPerks_hangmansTrick.png","images/perks/iconPerks_hatred.png","images/perks/iconPerks_hauntedGround.png","images/perks/iconPerks_headOn.png","images/perks/iconPerks_hexRetribution.png","images/perks/iconPerks_hope.png","images/perks/iconPerks_imAllEars.png","images/perks/iconPerks_infectiousFright.png","images/perks/iconPerks_innerStrength.png","images/perks/iconPerks_insidious.png","images/perks/iconPerks_ironGrasp.png","images/perks/iconPerks_ironMaiden.png","images/perks/iconPerks_ironWill.png","images/perks/iconPerks_kindred.png","images/perks/iconPerks_knockOut.png","images/perks/iconPerks_leader.png","images/perks/iconPerks_leftBehind.png","images/perks/iconPerks_lightborn.png","images/perks/iconPerks_lightweight.png","images/perks/iconPerks_lithe.png","images/perks/iconPerks_luckyBreak.png","images/perks/iconPerks_madGrit.png","images/perks/iconPerks_makeYourChoice.png","images/perks/iconPerks_mettleOfMan.png","images/perks/iconPerks_mindBreaker.png","images/perks/iconPerks_monitorAndAbuse.png","images/perks/iconPerks_monstrousShrine.png","images/perks/iconPerks_nemesis.png","images/perks/iconPerks_noOneEscapesDeath.png","images/perks/iconPerks_noOneLeftBehind.png","images/perks/iconPerks_objectOfObsession.png","images/perks/iconPerks_offTheRecord.png","images/perks/iconPerks_openHanded.png","images/perks/iconPerks_overwhelmingPresence.png","images/perks/iconPerks_pharmacy.png","images/perks/iconPerks_playWithYourFood.png","images/perks/iconPerks_plunderersInstinct.png","images/perks/iconPerks_poised.png","images/perks/iconPerks_popGoesTheWeasel.png","images/perks/iconPerks_predator.png","images/perks/iconPerks_premonition.png","images/perks/iconPerks_proveThyself.png","images/perks/iconPerks_quickAndQuiet.png","images/perks/iconPerks_redHerring.png","images/perks/iconPerks_rememberMe.png","images/perks/iconPerks_repressedAlliance.png","images/perks/iconPerks_resilience.png","images/perks/iconPerks_ruin.png","images/perks/iconPerks_saboteur.png","images/perks/iconPerks_saveTheBestForLast.png","images/perks/iconPerks_secondWind.png","images/perks/iconPerks_selfCare.png","images/perks/iconPerks_shadowborn.png","images/perks/iconPerks_slipperyMeat.png","images/perks/iconPerks_sloppyButcher.png","images/perks/iconPerks_smallGame.png","images/perks/iconPerks_soleSurvivor.png","images/perks/iconPerks_solidarity.png","images/perks/iconPerks_soulGuard.png","images/perks/iconPerks_spiesFromTheShadows.png","images/perks/iconPerks_spineChill.png","images/perks/iconPerks_spiritFury.png","images/perks/iconPerks_sprintBurst.png","images/perks/iconPerks_stakeOut.png","images/perks/iconPerks_streetwise.png","images/perks/iconPerks_stridor.png","images/perks/iconPerks_surge.png","images/perks/iconPerks_surveillance.png","images/perks/iconPerks_technician.png","images/perks/iconPerks_tenacity.png","images/perks/iconPerks_thatanophobia.png","images/perks/iconPerks_theThirdSeal.png","images/perks/iconPerks_thisIsNotHappening.png","images/perks/iconPerks_thrillOfTheHunt.png","images/perks/iconPerks_thrillingTremors.png","images/perks/iconPerks_tinkerer.png","images/perks/iconPerks_trailOfTorment.png","images/perks/iconPerks_unbreakable.png","images/perks/iconPerks_unnervingPresence.png","images/perks/iconPerks_unrelenting.png","images/perks/iconPerks_upTheAnte.png","images/perks/iconPerks_urbanEvasion.png","images/perks/iconPerks_vigil.png","images/perks/iconPerks_wakeUp.png","images/perks/iconPerks_wellMakeIt.png","images/perks/iconPerks_whispers.png","images/perks/iconPerks_windowsOfOpportunity.png","images/perks/iconPerks_zanshinTactics.png","manifest.json"]),r=new Set(n);self.addEventListener("install",e=>{e.waitUntil(caches.open(s).then(e=>e.addAll(n)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const n of e)n!==s&&await caches.delete(n);self.clients.claim()}))}),self.addEventListener("fetch",s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const n=new URL(s.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&r.has(n.pathname)?s.respondWith(caches.match(s.request)):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline"+e).then(async e=>{try{const n=await fetch(s.request);return e.put(s.request,n.clone()),n}catch(n){const r=await e.match(s.request);if(r)return r;throw n}}))))})}();
