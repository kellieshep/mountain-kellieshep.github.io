var text =' {
  "services" : [
  {
    "name": "Quick Tune",
    "price": "$80",
    "description": "Adjust shifting, brakes, headset, bottom bracket and hubs, true wheels (lateral and dish), bolt/torque check safety check, inflate tires, lube chain, clean bike (drivetrain cleaning not included).",
   
  },
  {
    "name": "Standard Tune",
    "price": "$120",
    "description": "Adjust shifting, brakes, headset, bottom bracket and hubs, true wheel (lateral and dish), bolt/torque check safety check, inflate tires, clean bike, lube chain and grease parts as needed, full drivetrain cleaning.",
   
  },

  {
    "name": "Deluxe Tune Road",
    "price": "$200",
    "description": "Full bike disassemble and full reassemble with grease and lube where needed, full drivetrain cleaning, wheels trued (lateral, dish and round), install new cables and housing, bolt/torque check safety check, inflate tires, repacking of all applicable bearings, new parts get free install, suspension work and hydraulic brake bleeds may be additional labor.",
   
  },

  {
    "name": "Deluxe Tune Mountain",
    "price": "$350",
    "description": "Full bike disassemble and full reassemble with grease and lube as needed. Full drive train cleaning. True wheels (lateral, dish and round). Install new cables and housing. Bolt/torque check, “safety check.” Inflate tires. Repack of all applicable bearings. Bleed of hydraulic disc brakes.&nbsp; New parts get free install. Suspension work may be additional labor.",
   
  }
 ]
}';
obj = JSON.parse(text);
    var services = document.getElementById('demo').innerHTML=obj.sevices.name[0].name+" "+obj.services[0].price+"<br> "+ obj.services[0].description;
       