# Bendrai

-   baze:

    -   README failas
    -   3+ commit'u
    -   Car.js failas
    -   klase "Car" pavadinimu (tiksliai)
    -   kodo formatavimas
    -   be lietuvisku pavadinimu
        -   kad ir kaip apmaudu
    -   lietuviskos zinutes - galimos, bet nebutinos

-   constructor:

    -   pavadinimas
    -   modelis
    -   spalva
    -   kuro bako talpa
    -   vidutines kuro sanaudos
    -   ar ijungtas varyklis (default: false)
    -   greitis (default: 0)

-   metodas: ijungti varykli:

    -   negali ijungti ijungto
    -   negali, jei bakas tuscias
    -   ijungiamas varyklis

-   metodas: isjungti varykli:

    -   negali, jei jau isjungtas
    -   negali, jei vaziuoji
    -   isjungiamas varyklis

-   metodas: pradeti vaziuoti:

    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
    -   negali, jei varyklis nera ijungtas
    -   greitis tampa ne nulinis (bet koks normalus teigiamas skaicius)
    -   sunaudoja 2x kuro (vidutiniu kuro sanaudu)
    -   jei po sekmingo pradejimo vaziuoti kuro bakas tampa tuscias:
        -   automatiskai sustoja
        -   greitis tampa nulisnis
        -   automatiskai issijungia varyklis

-   metodas: vaziuoti / testi vaziavima:

    -   negali, jei varyklis nera ijungtas
    -   negali, jei greitis nulinis
        -   nes tai reiskia, jog dar nepradejai vaziuoti / nepajudeta is vietos
    -   negali, jei nera pakankamo kiekio kuro
    -   sunaudoja 1x kuro (vidutiniu kuro sanaudu)
    -   jei po sekmingo vaziuoti kuro bakas tampa tuscias:
        -   automatiskai sustoja
        -   greitis tampa nulisnis
        -   automatiskai issijungia varyklis

-   metodas: sustoti:

    -   negalima, jei nevaziuoji
    -   greitis tampa nulinis
    -   varyklis neissijungia

-   metodas: kiek liko kuro:

    -   grazina kuro likuti bake

-   metodas: uzpilti kuro baka (kiek litrais):
    -   blogai, jei nepriima parametro
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei ijungtas varyklis
    -   negali, jei bakas jau pilnas
    -   bandant uzpilti daugiau nei yra laisvo turio, uzpilama tik laisvoji dalis, bet ne daugiau

# Vertinimai

**D.K.**

-   baze:
    -   README failas
    -   Car.js failas
-   constructor:
    -   lietuviski pavadinimai
    -   truksta keliu pradiniu reiksmiu gavimo per parametrus
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli:
    -   negali, jei jau isjungtas
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
        -   `this.fuelLevel < 3` nera teisingas sprendimas, nes reikia atsizvelgti i `this.averageFuelConsumption`
-   metodas: vaziuoti:
    -   negali, jei varyklis nera ijungtas
    -   negali, jei greitis nulinis
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro:
    -   nerastas metodas
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei ijungtas varyklis

**D.F.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli:
    -   negali, jei bakas tuscias
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei nesi sustojes
-   metodas: vaziuoti:
    -   negali, jei greitis nulinis
    -   negali, jei nera pakankamo kiekio kuro
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   nepriima parametro
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius

**D.Š.**

-   nepateikta

**G.N.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
    -   truksta keliu pradiniu reiksmiu gavimo per parametrus
    -   perteklines reiksmes (klientas uz jas nemokes)
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   nesunaudoja 2x kuro
    -   perteklinis kodas
-   metodas: vaziuoti:
    -   nesunaudoja 1x kuro
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   `this.fuelTank === 45` ir `litrai > 45 - this.fuelTank` nera teisingos israiskos, nes `constructor` gali gauti (bet negavo) kitokia bako talpos reiksme, ja ir reiketu naudoti

**G.Š.**

-   nepateikta

**I.L.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
    -   greitis turetu buti skaicius
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   nereiketu `parseFloat`, jei greitis butu buves skaiciumi nuo pradzios
-   metodas: vaziuoti:
    -   nereiketu `parseFloat`, jei greitis butu buves skaiciumi nuo pradzios
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   nerastas metodas

**J.G.**

-   baze: - ok
-   constructor:
    -   `AverageFuelConsumption` is didziosios raides
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   nesunaudoja 2x kuro
    -   `this.fuelLeft` turetu buti priskiriama skaitine reiksme berots?.. ne tekstas, jog uzfiksuoti kuro panaudojimo fakta
-   metodas: vaziuoti:
    -   nesunaudoja 1x kuro
    -   `this.fuelLeft` turetu buti priskiriama skaitine reiksme berots?.. ne tekstas, jog uzfiksuoti kuro panaudojimo fakta
-   metodas: sustoti:
    -   negalima, jei nevaziuoji
-   metodas: kiek liko kuro:
    -   turetu rodyti realu likuti, kuris priklauso nuo "vaziavimu"
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   `if (this.speed == 0) return 'Car stopped and now can refuel.';` yra eilute, toliau kurios, daugiau kodas nepasiekiamas/neveikia, ko pasekoje, joks kuro papildymas neimanomas

**J.B.**

-   nepateikta

**J.J.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
    -   truksta keliu pradiniu reiksmiu gavimo per parametrus
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
    -   negali, jei varyklis nera ijungtas
    -   nesunaudoja 2x kuro
-   metodas: vaziuoti:
    -   nerastas metodas
-   metodas: sustoti:
    -   truksta zinuciu "blogaisiais" atvejais, t.y. dabar grazina `undefined`
-   metodas: kiek liko kuro:
    -   cia neturetu panaudoti (isminusuoti) kuro, reik tik grazinti likucio bake reiksme
-   metodas: uzpilti kuro baka:
    -   nepriima parametro
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei ijungtas varyklis
    -   negali, jei bakas jau pilnas

**K.S.**

-   baze: - ok
-   constructor: - ok
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti: - ok
-   metodas: vaziuoti: - ok
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka: - ok

**K.G.**

-   baze:
    -   visur naudojamas `console.log()`, o turetu buti `return`
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   sis metodas pats save isijungia, ko pasekoje pats pirmas `if` tampa beprasmis
-   metodas: vaziuoti: - ok
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei ijungtas varyklis
    -   bandant uzpilti daugiau nei yra laisvo turio, uzpilama tik laisvoji dalis, bet ne daugiau
    -   logines validacijos geros, bet nera realaus papildymo, t.y. `this.kuroLikutis` nepasikeicia

**K.B.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok 🚗⬅️💖
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei nesi sustojes
    -   negali, jei varyklis nera ijungtas
    -   greitis netampa ne nulinis
    -   `this.capacity < 20` nera teisinga, nes cia reikia tikrinti pagal `constructor` gaunama kuro suvartojimo reiksme
    -   nesunaudoja 2x kuro
-   metodas: vaziuoti:
    -   negali, jei varyklis nera ijungtas
    -   negali, jei greitis nulinis
    -   negali, jei nera pakankamo kiekio kuro (nebutinai tik nulis)
    -   nesunaudoja 1x kuro
-   metodas: sustoti:
    -   negalima, jei nevaziuoji
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   nerastas metodas

**M.U.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
-   metodas: vaziuoti:
    -   negali, jei greitis nulinis
    -   negali, jei nera pakankamo kiekio kuro
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius

**M.K.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   `this.engineOn = false` nera teisinga `if` salyga, turetu buti `===`, ko pasekoje si kodo saka niekada nepasiekiama ir veliau kodas visada reaguoja, lyg buti isjungtas varyklis, t.y. kai kvieti kitus metodus
-   metodas: vaziuoti: - ok
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   kas jei bandoma pripilti lygiai tiek, kiek truksta iki pilno bako? `undefined`

**P.S.**

-   baze: - ok
    -   tai kaip dalyje vietu grazinamos reiksmes yra "per protingai", nes ziurint is "komandines" puses, dauguma net nepastebetu svarbiu detaliu, t.y. ternaris ir skliausteliuose per kableli grazinamos kelios reiksmes
-   constructor: - ok
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio, t.y. tuscias bakas nera vienintele problemine situacija
-   metodas: vaziuoti:
    -   negali, jei varyklis nera ijungtas
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro:
    -   nerastas metodas
-   metodas: uzpilti kuro baka:
    -   nepriima parametro
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius

**R.V.**

-   baze:
    -   vietomis truksta kabletaskiu, ypac uz paskutiniu `return`
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli:
    -   negali, jei vaziuoji
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei varyklis nera ijungtas
    -   neuztenka apskaiciuoti sunaudota kuro kieki, reik ji dar ir panaudoti skaiciuojant kuro likuti
-   metodas: vaziuoti:
    -   negali, jei varyklis nera ijungtas
    -   negali, jei greitis nulinis
    -   negali, jei nera pakankamo kiekio kuro; tikrinti `this.fuelLevel < 0` neuztenka, nes cia praslysta variantas, kai `this.fuelLevel` yra lygus nuliui; cia reik lyginti su sanaudomis
-   metodas: sustoti:
    -   nera uzfiksuojamas faktas, jog buvo sustota, t.y. `this.speed` netampa nulis
-   metodas: kiek liko kuro:
    -   siuo metu pas tave yra apskaiciuota kiek lieka kuro, po pradejimo vaziuoti, jei kuro bakas buvo pilnas
    -   reikia, jog grazintu teisinga kuro likuti bake, net ir po papildomu pasivazinejimu is eiles
-   metodas: uzpilti kuro baka:
    -   siuo metu grazinama reiksme, kiek galima uzsipilti, nors cia reikia realaus papildymo momento
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei ijungtas varyklis
    -   negali, jei bakas jau pilnas

**R.Ž.**

-   baze:
    -   didzioji dalis metodu priimineja parametra `a`, kuris jiems:
        -   viena vertus - visiskai nereikalingas
        -   kita vertus - pavadinimas nera praktiskas ir "nepasakoja" kam jis skirtas
-   constructor:
    -   lietuviski pavadinimai
    -   dalis parametru reiksmiu turi buti ne gaunamos, o default
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli:
    -   negali, jei vaziuoji
-   metodas: pradeti vaziuoti:
    -   nera implementuotu validaciju ir logikos
-   metodas: vaziuoti:
    -   nera implementuotu validaciju ir logikos
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro:
    -   cia nera prasmes atimineti `a`, plius `this.gasTank` yra tiesiog bako talpa, bet ne likutis jame, tokia informacija turetu buti kaupiama atskirame kintamajame, pvz `this.fuelLeft`
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei ijungtas varyklis
    -   negali, jei bakas jau pilnas
    -   `a < 50` patikrinimas yra neteisingas, nes cia reikia atsizvelgti i realu likuti bake (nera stebimas) ir ipilama kuro kieki (gali butu panaudoti `a`, tik reik tinkamesnio pavadinimo)

**R.A.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli:
    -   negali, jei vaziuoji
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
-   metodas: vaziuoti:
    -   negali, jei varyklis nera ijungtas
    -   negali, jei nera pakankamo kiekio kuro
    -   nesunaudoja 1x kuro
-   metodas: sustoti:
    -   negalima, jei nevaziuoji
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei bakas jau pilnas

**R.R.**

-   nepateikta

**T.P.**

-   baze:
    -   failas is mazosios raides
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli:
    -   negali, jei vaziuoji
-   metodas: pradeti vaziuoti:
    -   formatavimas
    -   `this.fuelInTank` turetu islikti skaicius
-   metodas: vaziuoti:
    -   formatavimas
    -   `this.fuelInTank` turetu islikti skaicius
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   `Nan` -> `NaN`
    -   pirmasis `if` niekaip negali tenkinti esamu salygu, todel jis niekada nesuveiks, t.y. siuo metu cia yra klausiama `a IR b IR c IR d`, nors turbut tureta omeny `a ARBA b ARBA c ARBA d`, t.y. ieskoma pirma neigiama salyga, kuri turetu pagauti klaida
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   negali, jei bakas jau pilnas
    -   bandant uzpilti daugiau nei yra laisvo turio, uzpilama tik laisvoji dalis, bet ne daugiau

**T.B.**

-   baze:
    -   klases pavadinimas is mazosios raides
-   constructor:
    -   lietuviski pavadinimai
    -   nereik `+ Liters`, nes reiksmes palikti skaiciais zymiai praktiskiau; va spausdinimo metu ir butu galima prisideti extra teksta pagal poreiki
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei nesi sustojes
    -   negali, jei bake nera reikiamo kiekio
        -   tai kas daroma su `split` nera fainas budas gauti reiksme, nors ir veikia (zr. contructor komentara)
        -   ne tik nulis yra problema
-   metodas: vaziuoti:
    -   negali, jei greitis nulinis
    -   negali, jei nera pakankamo kiekio kuro
        -   ne tik nulis yra problema
-   metodas: sustoti:
    -   negalima, jei nevaziuoji
    -   cia tikrinamas kuro likutis nevisai tinkamoje vietoje, to reikia kai bandai vaziuoti
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   nepriima parametro
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   tolimesne turima logika/validacijos mazai prasminga, nes nera atsizvelgiama i norima papildyti kuro kieki

**T.D.**

-   nepateikta

**T.K.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
    -   nereik `km/h` prie greicio, nes reiksmes palikti skaiciais zymiai praktiskiau; va spausdinimo metu ir butu galima prisideti extra teksta pagal poreiki
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   greitis netampa ne nulinis (bet koks normalus teigiamas skaicius)
-   metodas: vaziuoti: - ok
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   praslysta begalybes
    -   gaunamo parametro validacijos turetu buti paciame priekyje
    -   reiketu geresnio pavadinimo, nei tik `a`

**V.S.**

-   nepateikta

**V.B.**

-   baze: - ok
-   constructor:
    -   lietuviski pavadinimai
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   negali, jei nesi sustojes
-   metodas: vaziuoti:
    -   negali, jei greitis nulinis
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka:
    -   negali, jei parametras nera skaiciaus tipo
    -   negali, jei parametras nera "normalus" skaicius
    -   negali, jei parametras nera teigiamas skaicius
    -   kas jei `liters === this.tankCapacity - this.fuelLeft`?

**V.S.**

-   baze:
    -   failo pavadinimas "Cars" o ne "Car", turetu sutapti su failo viduje esancios klases pavadinimu
    -   leters -> liters
-   constructor: - ok
-   metodas: ijungti varykli: - ok
-   metodas: isjungti varykli: - ok
-   metodas: pradeti vaziuoti:
    -   negali, jei bake nera reikiamo kiekio
    -   matau naudojama `else-if` - ar yra imanoma nenumatyta `else` kodo saka?
        -   jei ne, tai manau galima supaprastinti iki paprasto `if-else` panaudojimo
    -   su `this.fuelConsumption /= 2` ir `this.fuelConsumption */= 2` galiausiai gali buti sunku susitvarkyti/suziureti
-   metodas: vaziuoti:
    -   negali, jei nera pakankamo kiekio kuro
-   metodas: sustoti: - ok
-   metodas: kiek liko kuro: - ok
-   metodas: uzpilti kuro baka: - ok
