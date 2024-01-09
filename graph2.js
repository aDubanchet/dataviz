// Il me faut les prix en fonction de la consommation 
// 


const data = [{"Marque":"Lucid","Nom":"Lucid Air Dream Edition P","Vmax":270,"Range":645,"Efficacite":183,"Siege":5,"Prix":"218,000"},{"Marque":"Porsche","Nom":"Porsche Taycan Turbo S","Vmax":260,"Range":400,"Efficacite":209,"Siege":4,"Prix":"189,668"},{"Marque":"Audi","Nom":"Audi e-tron GT RS","Vmax":250,"Range":405,"Efficacite":210,"Siege":4,"Prix":"146,050"},{"Marque":"Renault","Nom":"Renault Zoe ZE50 R110","Vmax":135,"Range":315,"Efficacite":165,"Siege":5,"Prix":"36,840"},{"Marque":"Tesla","Nom":"Tesla Model Y Performance","Vmax":250,"Range":415,"Efficacite":181,"Siege":5,"Prix":"63,667"},{"Marque":"Porsche","Nom":"Porsche Taycan 4 Cross Turismo","Vmax":220,"Range":425,"Efficacite":197,"Siege":4,"Prix":"98,514"},{"Marque":"Renault","Nom":"Renault Zoe ZE50 R135","Vmax":140,"Range":310,"Efficacite":168,"Siege":5,"Prix":"37,840"},{"Marque":"Porsche","Nom":"Porsche Taycan Turbo","Vmax":260,"Range":415,"Efficacite":202,"Siege":4,"Prix":"156,348"},{"Marque":"Smart","Nom":"Smart EQ fortwo coupe","Vmax":130,"Range":100,"Efficacite":167,"Siege":2,"Prix":"21,940"},{"Marque":"Smart","Nom":"Smart EQ fortwo cabrio","Vmax":130,"Range":95,"Efficacite":176,"Siege":2,"Prix":"25,200"},{"Marque":"Honda","Nom":"Honda e Advance","Vmax":145,"Range":170,"Efficacite":168,"Siege":4,"Prix":"39,900"},{"Marque":"Porsche","Nom":"Porsche Taycan 4S","Vmax":250,"Range":395,"Efficacite":180,"Siege":4,"Prix":"108,867"},{"Marque":"Porsche","Nom":"Porsche Taycan 4S Plus","Vmax":250,"Range":460,"Efficacite":182,"Siege":4,"Prix":"114,389"},{"Marque":"Mercedes","Nom":"Mercedes EQV 300 Long","Vmax":160,"Range":305,"Efficacite":295,"Siege":7,"Prix":"71,626"},{"Marque":"Lexus","Nom":"Lexus UX 300e","Vmax":160,"Range":235,"Efficacite":191,"Siege":5,"Prix":"47,550"},{"Marque":"BMW","Nom":"BMW i4 eDrive40","Vmax":190,"Range":470,"Efficacite":172,"Siege":5,"Prix":"59,200"},{"Marque":"Renault","Nom":"Renault Twingo Electric","Vmax":135,"Range":130,"Efficacite":164,"Siege":4,"Prix":"28,000"},{"Marque":"Fiat","Nom":"Fiat 500e Cabrio 42 kWh","Vmax":150,"Range":230,"Efficacite":162,"Siege":4,"Prix":"37,990"},{"Marque":"Skoda","Nom":"Skoda Enyaq iV 80","Vmax":160,"Range":420,"Efficacite":183,"Siege":5,"Prix":"48,900"},{"Marque":"Skoda","Nom":"Skoda Enyaq iV RS","Vmax":180,"Range":390,"Efficacite":197,"Siege":5,"Prix":"63,300"},{"Marque":"Fiat","Nom":"Fiat 500e Hatchback 42 kWh","Vmax":150,"Range":235,"Efficacite":159,"Siege":4,"Prix":"34,990"},{"Marque":"Nissan","Nom":"Nissan Ariya 63kWh","Vmax":160,"Range":320,"Efficacite":197,"Siege":5,"Prix":"47,490"},{"Marque":"Nissan","Nom":"Nissan Ariya 87kWh","Vmax":160,"Range":435,"Efficacite":200,"Siege":5,"Prix":"58,990"},{"Marque":"Nissan","Nom":"Nissan Ariya e-4ORCE 87kWh - 225 kW","Vmax":200,"Range":420,"Efficacite":207,"Siege":5,"Prix":"61,990"},{"Marque":"Nissan","Nom":"Nissan Ariya e-4ORCE 87kWh - 290 kW","Vmax":200,"Range":420,"Efficacite":207,"Siege":5,"Prix":"71,490"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.4 Pro Performance","Vmax":160,"Range":410,"Efficacite":188,"Siege":5,"Prix":"46,335"},{"Marque":"Mercedes","Nom":"Mercedes EQV 300 Extra-Long","Vmax":160,"Range":305,"Efficacite":295,"Siege":7,"Prix":"72,519"},{"Marque":"Lucid","Nom":"Lucid Air Grand Touring","Vmax":270,"Range":665,"Efficacite":168,"Siege":5,"Prix":"174,500"},{"Marque":"Lucid","Nom":"Lucid Air Touring","Vmax":250,"Range":550,"Efficacite":160,"Siege":5,"Prix":"120,000"},{"Marque":"Lucid","Nom":"Lucid Air Pure","Vmax":200,"Range":560,"Efficacite":157,"Siege":5,"Prix":"100,000"},{"Marque":"Fiat","Nom":"Fiat 500e Hatchback 24 kWh","Vmax":135,"Range":135,"Efficacite":158,"Siege":4,"Prix":"30,990"},{"Marque":"Fiat","Nom":"Fiat 500e 3+1 42 kWh","Vmax":150,"Range":235,"Efficacite":159,"Siege":4,"Prix":"36,990"},{"Marque":"Mercedes","Nom":"Mercedes EQC 400 4MATIC","Vmax":180,"Range":370,"Efficacite":216,"Siege":5,"Prix":"66,069"},{"Marque":"Citroen","Nom":"Citroen e-SpaceTourer M 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"53,640"},{"Marque":"Citroen","Nom":"Citroen e-SpaceTourer XL 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"54,430"},{"Marque":"Citroen","Nom":"Citroen e-SpaceTourer M 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"59,640"},{"Marque":"Citroen","Nom":"Citroen e-SpaceTourer XL 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"60,430"},{"Marque":"Opel","Nom":"Opel Zafira-e Life M 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"63,250"},{"Marque":"Opel","Nom":"Opel Zafira-e Life L 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"64,075"},{"Marque":"Opel","Nom":"Opel Zafira-e Life M 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"69,250"},{"Marque":"Opel","Nom":"Opel Zafira-e Life L 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"70,075"},{"Marque":"Peugeot","Nom":"Peugeot e-Traveller Standard 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"53,640"},{"Marque":"Peugeot","Nom":"Peugeot e-Traveller Long 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"54,430"},{"Marque":"Peugeot","Nom":"Peugeot e-Traveller Standard 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"59,640"},{"Marque":"Peugeot","Nom":"Peugeot e-Traveller Long 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"60,430"},{"Marque":"Porsche","Nom":"Porsche Taycan ","Vmax":230,"Range":410,"Efficacite":173,"Siege":4,"Prix":"88,399"},{"Marque":"Porsche","Nom":"Porsche Taycan Plus","Vmax":230,"Range":475,"Efficacite":176,"Siege":4,"Prix":"94,123"},{"Marque":"Tesla","Nom":"Tesla Model S Dual Motor","Vmax":250,"Range":570,"Efficacite":167,"Siege":5,"Prix":"112,990"},{"Marque":"Tesla","Nom":"Tesla Model S Plaid","Vmax":282,"Range":550,"Efficacite":173,"Siege":5,"Prix":"137,990"},{"Marque":"Tesla","Nom":"Tesla Model X Dual Motor","Vmax":250,"Range":470,"Efficacite":202,"Siege":7,"Prix":"120,990"},{"Marque":"Tesla","Nom":"Tesla Model X Plaid","Vmax":262,"Range":455,"Efficacite":209,"Siege":7,"Prix":"140,990"},{"Marque":"Mini","Nom":"Mini Cooper SE ","Vmax":150,"Range":180,"Efficacite":161,"Siege":4,"Prix":"35,700"},{"Marque":"Audi","Nom":"Audi e-tron GT quattro","Vmax":245,"Range":420,"Efficacite":202,"Siege":4,"Prix":"106,050"},{"Marque":"Hyundai","Nom":"Hyundai Kona Electric 39 kWh","Vmax":155,"Range":250,"Efficacite":157,"Siege":5,"Prix":"36,400"},{"Marque":"Hyundai","Nom":"Hyundai Kona Electric 64 kWh","Vmax":167,"Range":395,"Efficacite":162,"Siege":5,"Prix":"42,900"},{"Marque":"Porsche","Nom":"Porsche Taycan 4S Cross Turismo","Vmax":240,"Range":425,"Efficacite":197,"Siege":4,"Prix":"114,222"},{"Marque":"Porsche","Nom":"Porsche Taycan Turbo Cross Turismo","Vmax":250,"Range":400,"Efficacite":209,"Siege":4,"Prix":"157,776"},{"Marque":"Porsche","Nom":"Porsche Taycan Turbo S Cross Turismo","Vmax":250,"Range":385,"Efficacite":217,"Siege":4,"Prix":"191,096"},{"Marque":"Kia","Nom":"Kia EV6 GT","Vmax":260,"Range":370,"Efficacite":200,"Siege":5,"Prix":"72,990"},{"Marque":"BMW","Nom":"BMW iX xDrive40","Vmax":200,"Range":360,"Efficacite":197,"Siege":5,"Prix":"77,300"},{"Marque":"BMW","Nom":"BMW iX xDrive50","Vmax":200,"Range":505,"Efficacite":208,"Siege":5,"Prix":"100,100"},{"Marque":"MG","Nom":"MG MG5 Electric Long Range","Vmax":185,"Range":335,"Efficacite":171,"Siege":5,"Prix":"38,490"},{"Marque":"MG","Nom":"MG Marvel R Performance","Vmax":200,"Range":330,"Efficacite":197,"Siege":5,"Prix":"50,990"},{"Marque":"Hyundai","Nom":"Hyundai IONIQ 5 Standard Range 2WD","Vmax":185,"Range":295,"Efficacite":183,"Siege":5,"Prix":"43,900"},{"Marque":"Kia","Nom":"Kia EV6 Standard Range 2WD","Vmax":185,"Range":305,"Efficacite":177,"Siege":5,"Prix":"46,990"},{"Marque":"Kia","Nom":"Kia EV6 Long Range 2WD","Vmax":185,"Range":410,"Efficacite":180,"Siege":5,"Prix":"51,990"},{"Marque":"Kia","Nom":"Kia EV6 Long Range AWD","Vmax":185,"Range":400,"Efficacite":185,"Siege":5,"Prix":"55,980"},{"Marque":"Mercedes","Nom":"Mercedes EQS 450+","Vmax":210,"Range":640,"Efficacite":168,"Siege":5,"Prix":"109,551"},{"Marque":"Mercedes","Nom":"Mercedes EQS 580 4MATIC","Vmax":210,"Range":605,"Efficacite":178,"Siege":5,"Prix":"141,705"},{"Marque":"Audi","Nom":"Audi Q4 e-tron 40","Vmax":160,"Range":405,"Efficacite":189,"Siege":5,"Prix":"51,900"},{"Marque":"Audi","Nom":"Audi Q4 e-tron 50 quattro","Vmax":180,"Range":385,"Efficacite":199,"Siege":5,"Prix":"57,900"},{"Marque":"Audi","Nom":"Audi Q4 Sportback e-tron 50 quattro","Vmax":180,"Range":400,"Efficacite":192,"Siege":5,"Prix":"59,900"},{"Marque":"Mercedes","Nom":"Mercedes EQB 350 4MATIC","Vmax":160,"Range":335,"Efficacite":199,"Siege":7,"Prix":"58,197"},{"Marque":"Mercedes","Nom":"Mercedes EQA 300 4MATIC","Vmax":160,"Range":350,"Efficacite":190,"Siege":5,"Prix":"53,746"},{"Marque":"Mercedes","Nom":"Mercedes EQA 350 4MATIC","Vmax":160,"Range":350,"Efficacite":190,"Siege":5,"Prix":"56,424"},{"Marque":"Toyota","Nom":"Toyota PROACE Verso M 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"64,530"},{"Marque":"Toyota","Nom":"Toyota PROACE Verso L 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"65,385"},{"Marque":"CUPRA","Nom":"CUPRA Born 150 kW - 58 kWh","Vmax":160,"Range":350,"Efficacite":166,"Siege":5,"Prix":"39,370"},{"Marque":"CUPRA","Nom":"CUPRA Born 170 kW - 58 kWh","Vmax":160,"Range":345,"Efficacite":168,"Siege":5,"Prix":"40,750"},{"Marque":"CUPRA","Nom":"CUPRA Born 170 kW - 77 kWh","Vmax":160,"Range":450,"Efficacite":171,"Siege":4,"Prix":"46,450"},{"Marque":"BMW","Nom":"BMW i4 M50","Vmax":225,"Range":435,"Efficacite":186,"Siege":5,"Prix":"70,800"},{"Marque":"Renault","Nom":"Renault Megane E-Tech EV60 220hp","Vmax":160,"Range":360,"Efficacite":167,"Siege":5,"Prix":"46,600"},{"Marque":"Peugeot","Nom":"Peugeot e-Rifter Standard 50 kWh","Vmax":135,"Range":205,"Efficacite":226,"Siege":7,"Prix":"41,240"},{"Marque":"Peugeot","Nom":"Peugeot e-Rifter Long 50 kWh","Vmax":135,"Range":200,"Efficacite":232,"Siege":7,"Prix":"42,440"},{"Marque":"MG","Nom":"MG Marvel R ","Vmax":200,"Range":335,"Efficacite":194,"Siege":5,"Prix":"46,990"},{"Marque":"Audi","Nom":"Audi Q4 e-tron 45 quattro","Vmax":180,"Range":385,"Efficacite":199,"Siege":5,"Prix":"53,990"},{"Marque":"Audi","Nom":"Audi Q4 Sportback e-tron 40","Vmax":160,"Range":425,"Efficacite":180,"Siege":5,"Prix":"53,900"},{"Marque":"BMW","Nom":"BMW iX3 ","Vmax":180,"Range":385,"Efficacite":192,"Siege":5,"Prix":"67,300"},{"Marque":"Renault","Nom":"Renault Megane E-Tech EV40 130hp","Vmax":150,"Range":250,"Efficacite":160,"Siege":5,"Prix":"42,000"},{"Marque":"Mercedes","Nom":"Mercedes EQS AMG 53 4MATIC+","Vmax":250,"Range":565,"Efficacite":191,"Siege":5,"Prix":"155,009"},{"Marque":"MG","Nom":"MG ZS EV Standard Range","Vmax":175,"Range":270,"Efficacite":181,"Siege":5,"Prix":"33,990"},{"Marque":"MG","Nom":"MG ZS EV Long Range","Vmax":175,"Range":365,"Efficacite":187,"Siege":5,"Prix":"37,990"},{"Marque":"Mercedes","Nom":"Mercedes EQV 250 Long","Vmax":160,"Range":205,"Efficacite":293,"Siege":7,"Prix":"68,056"},{"Marque":"Mercedes","Nom":"Mercedes EQV 250 Extra-Long","Vmax":160,"Range":205,"Efficacite":293,"Siege":7,"Prix":"68,949"},{"Marque":"Opel","Nom":"Opel Combo-e Life 50 kWh","Vmax":135,"Range":205,"Efficacite":226,"Siege":7,"Prix":"43,050"},{"Marque":"Opel","Nom":"Opel Combo-e Life XL 50 kWh","Vmax":135,"Range":200,"Efficacite":232,"Siege":7,"Prix":"44,750"},{"Marque":"Citroen","Nom":"Citroen e-Berlingo M 50 kWh","Vmax":135,"Range":205,"Efficacite":226,"Siege":5,"Prix":"37,790"},{"Marque":"Citroen","Nom":"Citroen e-Berlingo XL 50 kWh","Vmax":135,"Range":200,"Efficacite":232,"Siege":7,"Prix":"43,640"},{"Marque":"Tesla","Nom":"Tesla Model 3 ","Vmax":225,"Range":380,"Efficacite":151,"Siege":5,"Prix":"44,668"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.5 Pro","Vmax":160,"Range":430,"Efficacite":179,"Siege":5,"Prix":"47,935"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.5 Pro Performance","Vmax":160,"Range":430,"Efficacite":179,"Siege":5,"Prix":"48,970"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.5 GTX","Vmax":180,"Range":405,"Efficacite":190,"Siege":5,"Prix":"56,455"},{"Marque":"Mercedes","Nom":"Mercedes EQB 300 4MATIC","Vmax":160,"Range":335,"Efficacite":199,"Siege":7,"Prix":"55,519"},{"Marque":"Porsche","Nom":"Porsche Taycan GTS","Vmax":250,"Range":450,"Efficacite":186,"Siege":4,"Prix":"134,214"},{"Marque":"Porsche","Nom":"Porsche Taycan GTS Sport Turismo","Vmax":250,"Range":425,"Efficacite":197,"Siege":4,"Prix":"135,166"},{"Marque":"Toyota","Nom":"Toyota bZ4X FWD","Vmax":160,"Range":335,"Efficacite":191,"Siege":5,"Prix":"47,490"},{"Marque":"Toyota","Nom":"Toyota bZ4X AWD","Vmax":160,"Range":330,"Efficacite":194,"Siege":5,"Prix":"57,390"},{"Marque":"Subaru","Nom":"Subaru Solterra AWD","Vmax":160,"Range":320,"Efficacite":200,"Siege":5,"Prix":"57,490"},{"Marque":"Peugeot","Nom":"Peugeot e-208 ","Vmax":150,"Range":290,"Efficacite":160,"Siege":5,"Prix":"39,100"},{"Marque":"Peugeot","Nom":"Peugeot e-2008 SUV ","Vmax":150,"Range":260,"Efficacite":178,"Siege":5,"Prix":"37,900"},{"Marque":"Opel","Nom":"Opel Corsa-e ","Vmax":150,"Range":295,"Efficacite":157,"Siege":5,"Prix":"36,395"},{"Marque":"Opel","Nom":"Opel Mokka-e ","Vmax":150,"Range":260,"Efficacite":178,"Siege":5,"Prix":"40,650"},{"Marque":"Citroen","Nom":"Citroen e-C4 ","Vmax":150,"Range":275,"Efficacite":168,"Siege":5,"Prix":"36,040"},{"Marque":"Renault","Nom":"Renault Megane E-Tech EV60 130hp","Vmax":150,"Range":365,"Efficacite":164,"Siege":5,"Prix":"47,000"},{"Marque":"SsangYong","Nom":"SsangYong Korando e-Motion","Vmax":156,"Range":290,"Efficacite":193,"Siege":5,"Prix":"40,490"},{"Marque":"BMW","Nom":"BMW iX M60","Vmax":250,"Range":485,"Efficacite":217,"Siege":5,"Prix":"136,100"},{"Marque":"Tesla","Nom":"Tesla Model 3 Long Range Dual Motor","Vmax":233,"Range":485,"Efficacite":155,"Siege":5,"Prix":"53,668"},{"Marque":"Citroen","Nom":"Citroen e-Jumpy Combi M 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"51,940"},{"Marque":"Citroen","Nom":"Citroen e-Jumpy Combi XL 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"52,730"},{"Marque":"Citroen","Nom":"Citroen e-Jumpy Combi M 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"57,940"},{"Marque":"Citroen","Nom":"Citroen e-Jumpy Combi XL 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"58,730"},{"Marque":"Opel","Nom":"Opel Vivaro-e Combi M 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"50,992"},{"Marque":"Opel","Nom":"Opel Vivaro-e Combi L 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"51,825"},{"Marque":"Opel","Nom":"Opel Vivaro-e Combi M 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"56,942"},{"Marque":"Opel","Nom":"Opel Vivaro-e Combi L 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"57,775"},{"Marque":"Peugeot","Nom":"Peugeot e-Expert Combi Standard 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"51,940"},{"Marque":"Peugeot","Nom":"Peugeot e-Expert Combi Long 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"52,730"},{"Marque":"Peugeot","Nom":"Peugeot e-Expert Combi Standard 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"57,940"},{"Marque":"Peugeot","Nom":"Peugeot e-Expert Combi Long 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"58,730"},{"Marque":"Mercedes","Nom":"Mercedes eVito Tourer Long 90 kWh","Vmax":160,"Range":310,"Efficacite":290,"Siege":7,"Prix":"64,248"},{"Marque":"Mercedes","Nom":"Mercedes eVito Tourer Extra-Long 90 kWh","Vmax":160,"Range":305,"Efficacite":295,"Siege":7,"Prix":"65,140"},{"Marque":"Mercedes","Nom":"Mercedes eVito Tourer Long 60 kWh","Vmax":160,"Range":210,"Efficacite":286,"Siege":7,"Prix":"60,678"},{"Marque":"Mercedes","Nom":"Mercedes eVito Tourer Extra-Long 60 kWh","Vmax":160,"Range":205,"Efficacite":293,"Siege":7,"Prix":"61,571"},{"Marque":"Tesla","Nom":"Tesla Model Y Long Range Dual Motor","Vmax":217,"Range":435,"Efficacite":172,"Siege":5,"Prix":"59,017"},{"Marque":"Tesla","Nom":"Tesla Model 3 Performance","Vmax":261,"Range":460,"Efficacite":163,"Siege":5,"Prix":"57,668"},{"Marque":"Porsche","Nom":"Porsche Taycan Sport Turismo","Vmax":230,"Range":380,"Efficacite":187,"Siege":4,"Prix":"89,351"},{"Marque":"Porsche","Nom":"Porsche Taycan Plus Sport Turismo","Vmax":230,"Range":445,"Efficacite":188,"Siege":4,"Prix":"95,074"},{"Marque":"Porsche","Nom":"Porsche Taycan 4S Sport Turismo","Vmax":250,"Range":370,"Efficacite":192,"Siege":4,"Prix":"109,819"},{"Marque":"Porsche","Nom":"Porsche Taycan 4S Plus Sport Turismo","Vmax":250,"Range":430,"Efficacite":195,"Siege":4,"Prix":"115,341"},{"Marque":"Porsche","Nom":"Porsche Taycan Turbo Sport Turismo","Vmax":260,"Range":405,"Efficacite":207,"Siege":4,"Prix":"157,300"},{"Marque":"Porsche","Nom":"Porsche Taycan Turbo S Sport Turismo","Vmax":260,"Range":395,"Efficacite":212,"Siege":4,"Prix":"190,620"},{"Marque":"Skoda","Nom":"Skoda Enyaq Coupe iV 60","Vmax":160,"Range":335,"Efficacite":173,"Siege":5,"Prix":"43,000"},{"Marque":"Skoda","Nom":"Skoda Enyaq Coupe iV 80","Vmax":160,"Range":445,"Efficacite":173,"Siege":5,"Prix":"54,400"},{"Marque":"Skoda","Nom":"Skoda Enyaq Coupe iV 80x","Vmax":160,"Range":430,"Efficacite":179,"Siege":5,"Prix":"57,000"},{"Marque":"Skoda","Nom":"Skoda Enyaq Coupe iV RS","Vmax":180,"Range":405,"Efficacite":190,"Siege":5,"Prix":"63,300"},{"Marque":"MG","Nom":"MG MG5 Electric Standard Range","Vmax":185,"Range":265,"Efficacite":174,"Siege":5,"Prix":"35,490"},{"Marque":"Genesis","Nom":"Genesis GV60 Sport","Vmax":200,"Range":380,"Efficacite":195,"Siege":5,"Prix":"63,200"},{"Marque":"Genesis","Nom":"Genesis GV60 Sport Plus","Vmax":235,"Range":365,"Efficacite":203,"Siege":5,"Prix":"73,100"},{"Marque":"Volkswagen","Nom":"Volkswagen e-Up! ","Vmax":130,"Range":205,"Efficacite":158,"Siege":4,"Prix":"29,995"},{"Marque":"Volkswagen","Nom":"Volkswagen ID. Buzz Pro","Vmax":145,"Range":330,"Efficacite":233,"Siege":5,"Prix":"64,581"},{"Marque":"Mercedes","Nom":"Mercedes EQE AMG 43 4MATIC","Vmax":210,"Range":485,"Efficacite":187,"Siege":5,"Prix":"103,827"},{"Marque":"Mercedes","Nom":"Mercedes EQE AMG 53 4MATIC+","Vmax":240,"Range":480,"Efficacite":189,"Siege":5,"Prix":"109,777"},{"Marque":"Nissan","Nom":"Nissan Leaf ","Vmax":144,"Range":235,"Efficacite":166,"Siege":5,"Prix":"33,400"},{"Marque":"Nissan","Nom":"Nissan Leaf e+","Vmax":157,"Range":340,"Efficacite":174,"Siege":5,"Prix":"41,100"},{"Marque":"Hyundai","Nom":"Hyundai IONIQ 5 Long Range 2WD","Vmax":185,"Range":390,"Efficacite":190,"Siege":5,"Prix":"47,900"},{"Marque":"Hyundai","Nom":"Hyundai IONIQ 5 Long Range AWD","Vmax":185,"Range":385,"Efficacite":192,"Siege":5,"Prix":"59,200"},{"Marque":"Mercedes","Nom":"Mercedes EQB 250","Vmax":160,"Range":345,"Efficacite":193,"Siege":7,"Prix":"52,550"},{"Marque":"Kia","Nom":"Kia Niro EV ","Vmax":167,"Range":380,"Efficacite":171,"Siege":5,"Prix":"47,590"},{"Marque":"Smart","Nom":"Smart #1 ","Vmax":180,"Range":330,"Efficacite":188,"Siege":5,"Prix":"42,490"},{"Marque":"Mercedes","Nom":"Mercedes EQS SUV 450+","Vmax":210,"Range":495,"Efficacite":219,"Siege":7,"Prix":"110,801"},{"Marque":"Mercedes","Nom":"Mercedes EQS SUV 450 4MATIC","Vmax":210,"Range":485,"Efficacite":224,"Siege":7,"Prix":"114,609"},{"Marque":"Mercedes","Nom":"Mercedes EQS SUV 580 4MATIC","Vmax":210,"Range":485,"Efficacite":224,"Siege":7,"Prix":"135,434"},{"Marque":"BMW","Nom":"BMW i7 xDrive60","Vmax":240,"Range":510,"Efficacite":199,"Siege":5,"Prix":"135,900"},{"Marque":"Lexus","Nom":"Lexus RZ 450e","Vmax":160,"Range":310,"Efficacite":206,"Siege":5,"Prix":"68,000"},{"Marque":"Aiways","Nom":"Aiways U5 ","Vmax":150,"Range":315,"Efficacite":190,"Siege":5,"Prix":"39,563"},{"Marque":"Mazda","Nom":"Mazda MX-30 ","Vmax":140,"Range":170,"Efficacite":176,"Siege":5,"Prix":"35,990"},{"Marque":"Lucid","Nom":"Lucid Air Dream Edition R","Vmax":270,"Range":685,"Efficacite":172,"Siege":5,"Prix":"218,000"},{"Marque":"Mercedes","Nom":"Mercedes EQA 250","Vmax":160,"Range":355,"Efficacite":187,"Siege":5,"Prix":"50,777"},{"Marque":"Mercedes","Nom":"Mercedes EQA 250+","Vmax":160,"Range":375,"Efficacite":188,"Siege":5,"Prix":"52,205"},{"Marque":"Mercedes","Nom":"Mercedes EQS 450 4MATIC","Vmax":210,"Range":615,"Efficacite":175,"Siege":5,"Prix":"113,359"},{"Marque":"Mercedes","Nom":"Mercedes EQS 500 4MATIC","Vmax":210,"Range":605,"Efficacite":178,"Siege":5,"Prix":"125,378"},{"Marque":"BMW","Nom":"BMW iX1 xDrive30","Vmax":180,"Range":355,"Efficacite":182,"Siege":5,"Prix":"55,000"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.4 Pro 4MOTION","Vmax":180,"Range":405,"Efficacite":190,"Siege":5,"Prix":"49,020"},{"Marque":"Genesis","Nom":"Genesis G80 Electrified Luxury","Vmax":225,"Range":440,"Efficacite":188,"Siege":5,"Prix":"69,200"},{"Marque":"Dacia","Nom":"Dacia Spring Electric 45","Vmax":125,"Range":165,"Efficacite":152,"Siege":4,"Prix":"22,550"},{"Marque":"Citroen","Nom":"Citroen e-C4 X ","Vmax":150,"Range":275,"Efficacite":168,"Siege":5,"Prix":"37,540"},{"Marque":"MG","Nom":"MG MG4 Electric 51 kWh","Vmax":160,"Range":300,"Efficacite":169,"Siege":5,"Prix":"31,990"},{"Marque":"MG","Nom":"MG MG4 Electric 64 kWh","Vmax":160,"Range":365,"Efficacite":169,"Siege":5,"Prix":"35,990"},{"Marque":"Fisker","Nom":"Fisker Ocean Sport","Vmax":160,"Range":380,"Efficacite":197,"Siege":5,"Prix":"41,560"},{"Marque":"Fisker","Nom":"Fisker Ocean Ultra","Vmax":200,"Range":510,"Efficacite":196,"Siege":5,"Prix":"57,000"},{"Marque":"Fisker","Nom":"Fisker Ocean Extreme","Vmax":200,"Range":510,"Efficacite":196,"Siege":5,"Prix":"69,950"},{"Marque":"Fisker","Nom":"Fisker Ocean One","Vmax":200,"Range":510,"Efficacite":196,"Siege":5,"Prix":"69,950"},{"Marque":"Mercedes","Nom":"Mercedes EQE 300","Vmax":210,"Range":515,"Efficacite":173,"Siege":5,"Prix":"66,402"},{"Marque":"Mercedes","Nom":"Mercedes EQE 350","Vmax":210,"Range":515,"Efficacite":173,"Siege":5,"Prix":"70,210"},{"Marque":"Mercedes","Nom":"Mercedes EQE 350 4MATIC","Vmax":210,"Range":500,"Efficacite":181,"Siege":5,"Prix":"73,363"},{"Marque":"Mercedes","Nom":"Mercedes EQE 500 4MATIC","Vmax":210,"Range":500,"Efficacite":181,"Siege":5,"Prix":"87,286"},{"Marque":"Hyundai","Nom":"Hyundai IONIQ 6 Standard Range 2WD","Vmax":185,"Range":360,"Efficacite":150,"Siege":5,"Prix":"43,900"},{"Marque":"Hyundai","Nom":"Hyundai IONIQ 6 Long Range 2WD","Vmax":185,"Range":475,"Efficacite":156,"Siege":5,"Prix":"54,000"},{"Marque":"Hyundai","Nom":"Hyundai IONIQ 6 Long Range AWD","Vmax":185,"Range":440,"Efficacite":168,"Siege":5,"Prix":"61,100"},{"Marque":"Audi","Nom":"Audi Q4 Sportback e-tron 45 quattro","Vmax":180,"Range":400,"Efficacite":192,"Siege":5,"Prix":"55,900"},{"Marque":"Fiat","Nom":"Fiat E-Ulysse L2 50 kWh","Vmax":130,"Range":185,"Efficacite":250,"Siege":7,"Prix":"55,990"},{"Marque":"Fiat","Nom":"Fiat E-Ulysse L2 75 kWh","Vmax":130,"Range":265,"Efficacite":257,"Siege":7,"Prix":"61,990"},{"Marque":"Fiat","Nom":"Fiat E-Ulysse L3 50 kWh","Vmax":130,"Range":180,"Efficacite":257,"Siege":7,"Prix":"56,990"},{"Marque":"Fiat","Nom":"Fiat E-Ulysse L3 75 kWh","Vmax":130,"Range":260,"Efficacite":262,"Siege":7,"Prix":"62,990"},{"Marque":"Genesis","Nom":"Genesis GV70 Electrified Sport","Vmax":235,"Range":350,"Efficacite":211,"Siege":5,"Prix":"67,300"},{"Marque":"Fiat","Nom":"Fiat 500e Cabrio 24 kWh","Vmax":135,"Range":135,"Efficacite":158,"Siege":4,"Prix":"35,490"},{"Marque":"Tesla","Nom":"Tesla Model Y ","Vmax":217,"Range":345,"Efficacite":167,"Siege":5,"Prix":"47,567"},{"Marque":"Peugeot","Nom":"Peugeot e-308 ","Vmax":150,"Range":310,"Efficacite":164,"Siege":5,"Prix":"44,000"},{"Marque":"Peugeot","Nom":"Peugeot e-308 SW ","Vmax":150,"Range":300,"Efficacite":169,"Siege":5,"Prix":"45,000"},{"Marque":"Smart","Nom":"Smart #1 Brabus","Vmax":180,"Range":320,"Efficacite":194,"Siege":5,"Prix":"48,990"},{"Marque":"Kia","Nom":"Kia e-Soul 64 kWh","Vmax":167,"Range":370,"Efficacite":173,"Siege":5,"Prix":"46,950"},{"Marque":"NIO","Nom":"NIO ET7 75 kWh","Vmax":200,"Range":400,"Efficacite":176,"Siege":5,"Prix":"81,900"},{"Marque":"NIO","Nom":"NIO ET7 100 kWh","Vmax":200,"Range":505,"Efficacite":178,"Siege":5,"Prix":"90,900"},{"Marque":"Ford","Nom":"Ford Mustang Mach-E SR RWD","Vmax":180,"Range":355,"Efficacite":197,"Siege":5,"Prix":"62,900"},{"Marque":"Ford","Nom":"Ford Mustang Mach-E ER RWD","Vmax":180,"Range":455,"Efficacite":200,"Siege":5,"Prix":"71,200"},{"Marque":"Ford","Nom":"Ford Mustang Mach-E SR AWD","Vmax":180,"Range":345,"Efficacite":203,"Siege":5,"Prix":"69,200"},{"Marque":"Ford","Nom":"Ford Mustang Mach-E ER AWD","Vmax":180,"Range":440,"Efficacite":207,"Siege":5,"Prix":"77,200"},{"Marque":"Ford","Nom":"Ford Mustang Mach-E GT","Vmax":200,"Range":425,"Efficacite":214,"Siege":5,"Prix":"86,200"},{"Marque":"Polestar","Nom":"Polestar 3 Long Range Dual motor","Vmax":210,"Range":490,"Efficacite":218,"Siege":5,"Prix":"88,600"},{"Marque":"Polestar","Nom":"Polestar 3 Long Range Performance","Vmax":210,"Range":470,"Efficacite":228,"Siege":5,"Prix":"95,200"},{"Marque":"Mercedes","Nom":"Mercedes EQE SUV 350+","Vmax":210,"Range":470,"Efficacite":193,"Siege":5,"Prix":"90,000"},{"Marque":"Mercedes","Nom":"Mercedes EQE SUV 350 4MATIC","Vmax":210,"Range":455,"Efficacite":199,"Siege":5,"Prix":"95,000"},{"Marque":"Mercedes","Nom":"Mercedes EQE SUV 500 4MATIC","Vmax":210,"Range":455,"Efficacite":199,"Siege":5,"Prix":"115,000"},{"Marque":"Mercedes","Nom":"Mercedes EQE SUV AMG 43 4MATIC","Vmax":210,"Range":435,"Efficacite":208,"Siege":5,"Prix":"124,920"},{"Marque":"Mercedes","Nom":"Mercedes EQE SUV AMG 53 4MATIC+","Vmax":240,"Range":425,"Efficacite":213,"Siege":5,"Prix":"130,000"},{"Marque":"Rolls-Royce","Nom":"Rolls-Royce Spectre ","Vmax":250,"Range":455,"Efficacite":220,"Siege":4,"Prix":"400,000"},{"Marque":"Aiways","Nom":"Aiways U6 ","Vmax":160,"Range":350,"Efficacite":171,"Siege":5,"Prix":"47,588"},{"Marque":"Lotus","Nom":"Lotus Eletre ","Vmax":250,"Range":520,"Efficacite":206,"Siege":5,"Prix":"95,990"},{"Marque":"Lotus","Nom":"Lotus Eletre R","Vmax":260,"Range":450,"Efficacite":238,"Siege":5,"Prix":"150,990"},{"Marque":"Audi","Nom":"Audi Q8 e-tron 50 quattro","Vmax":200,"Range":415,"Efficacite":214,"Siege":5,"Prix":"74,400"},{"Marque":"Audi","Nom":"Audi Q8 e-tron 55 quattro","Vmax":200,"Range":495,"Efficacite":214,"Siege":5,"Prix":"85,300"},{"Marque":"Audi","Nom":"Audi Q8 e-tron Sportback 50 quattro","Vmax":200,"Range":440,"Efficacite":202,"Siege":5,"Prix":"76,650"},{"Marque":"Audi","Nom":"Audi Q8 e-tron Sportback 55 quattro","Vmax":200,"Range":525,"Efficacite":202,"Siege":5,"Prix":"87,550"},{"Marque":"Audi","Nom":"Audi SQ8 e-tron ","Vmax":210,"Range":445,"Efficacite":238,"Siege":5,"Prix":"110,000"},{"Marque":"Audi","Nom":"Audi SQ8 e-tron Sportback ","Vmax":210,"Range":470,"Efficacite":226,"Siege":5,"Prix":"115,000"},{"Marque":"Volvo","Nom":"Volvo EX90 Twin Motor","Vmax":180,"Range":455,"Efficacite":235,"Siege":7,"Prix":"105,550"},{"Marque":"Volvo","Nom":"Volvo EX90 Twin Motor Performance","Vmax":180,"Range":440,"Efficacite":243,"Siege":7,"Prix":"110,650"},{"Marque":"Mercedes","Nom":"Mercedes EQB 250+","Vmax":160,"Range":365,"Efficacite":193,"Siege":7,"Prix":"53,978"},{"Marque":"Toyota","Nom":"Toyota Proace City Verso Electric L1 50 kWh","Vmax":135,"Range":210,"Efficacite":220,"Siege":5,"Prix":"37,800"},{"Marque":"Toyota","Nom":"Toyota Proace City Verso Electric L2 50 kWh","Vmax":135,"Range":205,"Efficacite":226,"Siege":7,"Prix":"40,150"},{"Marque":"ORA","Nom":"ORA Funky Cat 48 kWh","Vmax":160,"Range":260,"Efficacite":175,"Siege":5,"Prix":"38,990"},{"Marque":"BYD","Nom":"BYD ATTO 3 ","Vmax":160,"Range":320,"Efficacite":188,"Siege":5,"Prix":"44,625"},{"Marque":"BYD","Nom":"BYD TANG ","Vmax":180,"Range":350,"Efficacite":240,"Siege":7,"Prix":"71,400"},{"Marque":"BYD","Nom":"BYD HAN ","Vmax":180,"Range":465,"Efficacite":178,"Siege":5,"Prix":"70,805"},{"Marque":"BMW","Nom":"BMW i4 eDrive35","Vmax":190,"Range":400,"Efficacite":168,"Siege":5,"Prix":"56,500"},{"Marque":"NIO","Nom":"NIO ET5 75 kWh","Vmax":200,"Range":395,"Efficacite":178,"Siege":5,"Prix":"59,500"},{"Marque":"NIO","Nom":"NIO ET5 100 kWh","Vmax":200,"Range":495,"Efficacite":182,"Siege":5,"Prix":"68,500"},{"Marque":"NIO","Nom":"NIO EL7 75 kWh","Vmax":200,"Range":340,"Efficacite":207,"Siege":5,"Prix":"85,900"},{"Marque":"NIO","Nom":"NIO EL7 100 kWh","Vmax":200,"Range":430,"Efficacite":209,"Siege":5,"Prix":"94,900"},{"Marque":"Abarth","Nom":"Abarth 500e Scorpionissima","Vmax":155,"Range":225,"Efficacite":166,"Siege":4,"Prix":"43,000"},{"Marque":"DS","Nom":"DS 3 E-Tense","Vmax":150,"Range":300,"Efficacite":169,"Siege":5,"Prix":"40,540"},{"Marque":"Opel","Nom":"Opel Astra Electric","Vmax":170,"Range":310,"Efficacite":164,"Siege":5,"Prix":"40,000"},{"Marque":"Opel","Nom":"Opel Astra Sports Tourer Electric","Vmax":170,"Range":300,"Efficacite":169,"Siege":5,"Prix":"42,000"},{"Marque":"Jeep","Nom":"Jeep Avenger Electric 1st Edition","Vmax":150,"Range":295,"Efficacite":172,"Siege":5,"Prix":"39,900"},{"Marque":"Mercedes","Nom":"Mercedes EQS SUV 500 4MATIC","Vmax":210,"Range":485,"Efficacite":224,"Siege":7,"Prix":"124,545"},{"Marque":"Volvo","Nom":"Volvo XC40 Recharge Single Motor","Vmax":180,"Range":345,"Efficacite":191,"Siege":5,"Prix":"47,500"},{"Marque":"Volvo","Nom":"Volvo XC40 Recharge Single Motor ER","Vmax":180,"Range":405,"Efficacite":195,"Siege":5,"Prix":"53,000"},{"Marque":"Volvo","Nom":"Volvo XC40 Recharge Twin Motor","Vmax":180,"Range":390,"Efficacite":203,"Siege":5,"Prix":"59,950"},{"Marque":"Volvo","Nom":"Volvo C40 Recharge Single Motor","Vmax":180,"Range":355,"Efficacite":186,"Siege":5,"Prix":"47,500"},{"Marque":"Volvo","Nom":"Volvo C40 Recharge Single Motor ER","Vmax":180,"Range":420,"Efficacite":188,"Siege":5,"Prix":"54,450"},{"Marque":"Volvo","Nom":"Volvo C40 Recharge Twin Motor","Vmax":180,"Range":400,"Efficacite":198,"Siege":5,"Prix":"61,400"},{"Marque":"Renault","Nom":"Renault Kangoo E-Tech Electric","Vmax":132,"Range":215,"Efficacite":205,"Siege":5,"Prix":"39,300"},{"Marque":"Maserati","Nom":"Maserati GranTurismo Folgore","Vmax":320,"Range":425,"Efficacite":195,"Siege":4,"Prix":"250,000"},{"Marque":"VinFast","Nom":"VinFast VF 8 Eco Standard Range","Vmax":200,"Range":405,"Efficacite":202,"Siege":5,"Prix":"61,700"},{"Marque":"VinFast","Nom":"VinFast VF 8 Eco Extended Range","Vmax":200,"Range":425,"Efficacite":206,"Siege":5,"Prix":"63,850"},{"Marque":"VinFast","Nom":"VinFast VF 8 Plus Standard Range","Vmax":200,"Range":400,"Efficacite":205,"Siege":5,"Prix":"68,700"},{"Marque":"VinFast","Nom":"VinFast VF 8 Plus Extended Range","Vmax":200,"Range":425,"Efficacite":206,"Siege":5,"Prix":"72,500"},{"Marque":"VinFast","Nom":"VinFast VF 9 Standard Range","Vmax":200,"Range":400,"Efficacite":230,"Siege":7,"Prix":"82,250"},{"Marque":"VinFast","Nom":"VinFast VF 9 Extended Range","Vmax":200,"Range":520,"Efficacite":237,"Siege":7,"Prix":"89,800"},{"Marque":"Jaguar","Nom":"Jaguar I-Pace EV400","Vmax":200,"Range":380,"Efficacite":223,"Siege":5,"Prix":"92,400"},{"Marque":"Dacia","Nom":"Dacia Spring Electric 65 Extreme","Vmax":125,"Range":160,"Efficacite":156,"Siege":4,"Prix":"24,550"},{"Marque":"ORA","Nom":"ORA Funky Cat 63 kWh","Vmax":160,"Range":340,"Efficacite":174,"Siege":5,"Prix":"44,490"},{"Marque":"ORA","Nom":"ORA Funky Cat GT","Vmax":160,"Range":330,"Efficacite":180,"Siege":5,"Prix":"49,490"},{"Marque":"Jeep","Nom":"Jeep Avenger Electric ","Vmax":150,"Range":300,"Efficacite":169,"Siege":5,"Prix":"37,000"},{"Marque":"Polestar","Nom":"Polestar 2 Standard Range Single Motor","Vmax":205,"Range":385,"Efficacite":174,"Siege":5,"Prix":"50,775"},{"Marque":"Polestar","Nom":"Polestar 2 Long Range Single Motor","Vmax":205,"Range":440,"Efficacite":177,"Siege":5,"Prix":"54,475"},{"Marque":"Polestar","Nom":"Polestar 2 Long Range Dual Motor","Vmax":205,"Range":420,"Efficacite":186,"Siege":5,"Prix":"58,775"},{"Marque":"Polestar","Nom":"Polestar 2 Long Range Performance","Vmax":205,"Range":410,"Efficacite":190,"Siege":5,"Prix":"65,275"},{"Marque":"Mini","Nom":"Mini Cooper SE Convertible","Vmax":150,"Range":170,"Efficacite":170,"Siege":4,"Prix":"60,000"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.4 GTX","Vmax":180,"Range":400,"Efficacite":193,"Siege":5,"Prix":"53,255"},{"Marque":"Hyundai","Nom":"Hyundai Kona Electric 48 kWh","Vmax":155,"Range":300,"Efficacite":161,"Siege":5,"Prix":"40,000"},{"Marque":"Hyundai","Nom":"Hyundai Kona Electric 65 kWh","Vmax":167,"Range":400,"Efficacite":164,"Siege":5,"Prix":"48,000"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.3 Pro","Vmax":160,"Range":350,"Efficacite":166,"Siege":5,"Prix":"39,995"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.3 Pro S - 4 Seats","Vmax":160,"Range":455,"Efficacite":169,"Siege":4,"Prix":"47,595"},{"Marque":"Kia","Nom":"Kia EV9 99.8 kWh RWD","Vmax":180,"Range":460,"Efficacite":217,"Siege":7,"Prix":"65,000"},{"Marque":"Kia","Nom":"Kia EV9 99.8 kWh AWD","Vmax":180,"Range":450,"Efficacite":222,"Siege":7,"Prix":"70,000"},{"Marque":"Peugeot","Nom":"Peugeot e-208 ","Vmax":150,"Range":310,"Efficacite":155,"Siege":5,"Prix":"41,850"},{"Marque":"BMW","Nom":"BMW i7 M70 xDrive","Vmax":250,"Range":490,"Efficacite":208,"Siege":5,"Prix":"200,000"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.7 Pro","Vmax":180,"Range":470,"Efficacite":164,"Siege":5,"Prix":"55,000"},{"Marque":"Volkswagen","Nom":"Volkswagen ID.7 Pro S","Vmax":180,"Range":520,"Efficacite":165,"Siege":5,"Prix":"60,000"},{"Marque":"Polestar","Nom":"Polestar 4 Long Range Single Motor","Vmax":180,"Range":510,"Efficacite":184,"Siege":5,"Prix":"60,000"},{"Marque":"Polestar","Nom":"Polestar 4 Long Range Dual Motor","Vmax":200,"Range":475,"Efficacite":198,"Siege":5,"Prix":"65,000"}];


// A la fin, j'aimerai une map avec pour chaque consommation, le prix de la voiture 

// Conversion du prix en nombres
data.forEach(d => {
    d.Prix = +d.Prix.replace(/,/g, '');
  });

// Dimensions et marges du graphique
const margin = {top: 20, right: 30, bottom: 40, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// Création de l'élément SVG
const svg = d3.select(".graph2").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

// Fonction pour calculer la pente et l'ordonnée à l'origine de la droite de régression
function linearRegression(y, x){
    console.log(y);
    const n = y.length;
    let sum_x = 0, sum_y = 0, sum_xy = 0, sum_xx = 0;
    for (let i = 0; i < y.length; i++){
        sum_x += x[i];
        sum_y += y[i];
        sum_xy += (x[i] * y[i]);
        sum_xx += (x[i] * x[i]);
    }
    const slope = (n * sum_xy - sum_x * sum_y) / (n * sum_xx - sum_x * sum_x);
    const intercept = (sum_y - slope * sum_x) / n;
    return [slope, intercept];
}

// Extraire les valeurs de prix et d'efficacité
const prix = data.map(d => {
    // Vérifier si d.Prix est une chaîne et la convertir en nombre
    return typeof d.Prix === 'string' ? +d.Prix.replace(/,/g, '') : d.Prix;
  });

const efficacites = data.map(d => d.Efficacite);





// Calcul de la droite de régression
const regressionCoefficients = linearRegression(prix, efficacites);
const slope = regressionCoefficients[0];
const intercept = regressionCoefficients[1];



// Diviser les données en groupes et calculer la régression pour chaque groupe
const groupKeys = ["Groupe1", "Groupe2", "Groupe3"]; // Remplacez par vos critères de regroupement
const regressions = groupKeys.map(key => {
    const groupData = data.filter(d => d.groupKey === key); // Filtrer les données par groupe
    const xValues = groupData.map(d => d.Efficacite);
    const yValues = groupData.map(d => +d.Prix.replace(/,/g, ''));
    return linearRegression(yValues, xValues);
});




// Fonction pour calculer y à partir de x en utilisant la droite de régression
function predictY(x) {
    return slope * x + intercept;
}


// Configuration des échelles X et Y
const x = d3.scaleLinear()
    .domain([150, 250]) // Plage d'efficacité (modifiable selon les données)
    .range([0, width]);
svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x));

const y = d3.scaleLinear()
    .domain([0, 220000]) // Plage de prix (modifiable selon les données)
    .range([height, 0]);
svg.append("g")
    .call(d3.axisLeft(y));

// Ajout des points
svg.append("g")
  .selectAll("dot")
  .data(data)
  .enter()
  .append("circle")
    .attr("cx", d => x(d.Efficacite))
    .attr("cy", d => y(d.Prix))
    .attr("r", 5)
    .style("fill", "#69b3a2");

// Dessin de la droite de régression
svg.append("line")
.attr("x1", x(d3.min(efficacites)))
.attr("y1", y(predictY(d3.min(efficacites))))
.attr("x2", x(d3.max(efficacites)))
.attr("y2", y(predictY(d3.max(efficacites))))
.attr("stroke", "red")
.attr("stroke-width", 2);

// Tracez chaque droite de régression
regressions.forEach((coefficients, index) => {
    const [slope, intercept] = coefficients;

    function predictY(x) {
        return slope * x + intercept;
    }

    svg.append("line")
        .attr("x1", x(d3.min(data.map(d => d.Efficacite))))
        .attr("y1", y(predictY(d3.min(data.map(d => d.Efficacite)))))
        .attr("x2", x(d3.max(data.map(d => d.Efficacite))))
        .attr("y2", y(predictY(d3.max(data.map(d => d.Efficacite)))))
        .attr("stroke", colorScale(index)) // Utiliser une échelle de couleur ou une couleur fixe
        .attr("stroke-width", 2);
});

const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

// Ajout de titres aux axes
svg.append("text")             
    .attr("transform", `translate(${width/2}, ${height + margin.top + 20})`)
    .style("text-anchor", "middle")
    .text("Efficacité (Wh/km)");

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", - margin.left)
    .attr("x",- (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Prix (€)"); 
