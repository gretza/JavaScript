/*

1. Option: Attack
    1. Riteris atakuoja
    2. Gauname skaičių nuo 1 iki 10 (Math, random() - 0 iki 1) dauginame iš 10 ir gausime nuo 0 iki 10.
    3. Apvalinimo funkcijos: Math.round(), Math.floor(), Math.ceill()
    4. Gaut1 skaičių reikia atimti iš drakono gyvybių. (Pvz.: 200 - 8)
    5. Drakono gyvybes atnaujinti žaidimo lange.
    6. Patikrinam ar drakonas gyvas.
        a) jei negyvas - užbaigiam žaidimą
        b) jei gyvas - paleidžiam drakono veiksmą

        1. Gaunam skaičių nuo 1 iki 20. (čia bus tikrinama gynyba)
        2. Atimam skaičių iš riterio gyvybių.
        3. Įrašomas combat log įrašas (sukuriamai elementai ir jie appendinami į log'ą)
        4. Padaryti combat log'ą matomą (kiek žalos padarė riteris ir kiek drakonas)
        3. Patikriname ar riteris ir drakonas yra gyvi (jų gyvybės > 0).
            a) jei kažkuris iš jų miręs, žaidimas baigėsi ir rodome nugalėtojo ekraną.

2. Option: Defend
    1. Nustatome kintamąjė, kad riteris ginasi (let isKNightDefending = true)
    2. Drakono ėjimasL
        1. Tikrina ar riteris ginasi.
        2. Kadangi ginasi, drakonas žalos nepadaro
    3. Įrašom combat log įrašą.
    4. Patikrinam ar jie gyvi.
KITU ĖJIMU (prieš visus veiksmus)
1. Patikrinam ar riteris gynėsi ir nustatom, kad jis nebesigina.

3. Option: Heal
    1. Riterio ėjimas - gaunam skaičių nuo 1-30.
    2. Skaičių pridedam prie riterio gyvybių.
    3. Drakono ėjimas:
        1. Tikrina, ar riteris ginasi.
        2. Kadangi nesigina - drakonas puola riterį.
    4. Įrašoma combat log įrašas.

//i

