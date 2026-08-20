const incidents=[
 {title:"Industrial estate fire — Barking",borough:"Barking and Dagenham",type:"Fire at commercial property",detail:"Around 125 firefighters tackled a fire on Ripple Road.",date:"12 Aug 2026"},
 {title:"Grass fire — Greenford",borough:"Ealing",type:"Outdoor fire",detail:"Six fire engines and around 40 firefighters were called to a grass fire in Perivale Park.",date:"12 Aug 2026"},
 {title:"Grass fire — Mitcham",borough:"Merton",type:"Outdoor fire",detail:"Eight fire engines and around 60 firefighters attended a grass fire near Beddington Lane.",date:"10 Aug 2026"},
 {title:"Grass fire — West Drayton",borough:"Hillingdon",type:"Outdoor fire",detail:"Four fire engines and around 25 firefighters tackled a grass fire near Laurel Lane.",date:"10 Aug 2026"},
 {title:"Grass fire — Bexleyheath",borough:"Bexley",type:"Outdoor fire",detail:"Four fire engines and around 25 firefighters tackled a grass fire near Martens Avenue.",date:"10 Aug 2026"},
 {title:"Hotel fire — Fulham",borough:"Hammersmith and Fulham",type:"Fire at commercial property",detail:"Four fire engines responded to a hotel fire in Fulham.",date:"7 Aug 2026"},
 {title:"House fire — Charlton",borough:"Greenwich",type:"House or flat fire",detail:"Four fire engines responded to a house fire in Charlton.",date:"6 Aug 2026"},
 {title:"Weather-related calls — London",borough:"London-wide",type:"Flooding",detail:"Firefighters responded to flooding calls following thunderstorms.",date:"23 Jun 2026"}
];
const stations=[
 ["Wembley","Brent"],["Battersea","Wandsworth"],["Chelsea","Kensington and Chelsea"],["Croydon","Croydon"],["Holloway","Islington"],["Heston","Hounslow"],["Ilford","Redbridge"],["Lewisham","Lewisham"],["Mitcham","Merton"]
];
const ranks=[
 ["Firefighter","Operational frontline role"],["Leading Firefighter","Senior operational role"],["Sub Officer","Officer rank"],["Station Officer","Officer rank"],["Station Commander","Station leadership"],["Group Commander","Group leadership"],["Assistant Commissioner","Senior command"],["Commissioner","Brigade leadership"]
];
function renderIncidents(){
 const filter=document.querySelector("#typeFilter").value;
 const data=filter==="all"?incidents:incidents.filter(x=>x.type===filter);
 document.querySelector("#incidentGrid").innerHTML=data.map(x=>`<article class="card"><span class="tag">${x.type}</span><h3>${x.title}</h3><p>${x.detail}</p><p><b>${x.borough}</b> • ${x.date}</p></article>`).join("");
}
function renderStations(){
 const q=document.querySelector("#stationSearch").value.toLowerCase();
 document.querySelector("#stationGrid").innerHTML=stations.filter(x=>(x[0]+" "+x[1]).toLowerCase().includes(q)).map(x=>`<article class="card"><span class="tag">Fire station</span><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join("");
}
document.querySelector("#typeFilter").addEventListener("change",renderIncidents);
document.querySelector("#stationSearch").addEventListener("input",renderStations);
document.querySelector("#rankGrid").innerHTML=ranks.map((x,i)=>`<div class="rank"><b>${i+1}. ${x[0]}</b><span>${x[1]}</span></div>`).join("");
renderIncidents();renderStations();
