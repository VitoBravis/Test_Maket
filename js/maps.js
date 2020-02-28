ymaps.ready(function () {
    let mapContainer = document.querySelector(".map");
    let mapItems = document.querySelectorAll(".map__item");

    let myMap = null;
    mapContainer.addEventListener("click", function () {
        if(myMap === null) {
            mapItems[0].classList.add("map__item--1_fade");
            mapItems[1].classList.add("map__item--2_fade");

            myMap = new ymaps.Map("map", {
                center: [42.649709104834265, 25.236088930049338],
                zoom: 3.2,
                type: 'yandex#hybrid',
                controls: []
            }, {
                restrictMapArea: [
                    [85.0665002136982, -168.13082116102484],
                    [-60.83881355687119, -170.27578865426403]
                ]
            });
            myMap.behaviors.disable('scrollZoom');
            myMap.behaviors.disable('dblClickZoom');
            myMap.behaviors.disable('rightMouseButtonMagnifier');

            myMap.geoObjects
                .add(new ymaps.Placemark([37.44150312477286,-117.73622226614305], {
                    balloonContent: 'Burro Schmidt Tunnel Rd, Randsburg, CA 93554, United States</br>' +
                        'C46F+5H Saltdale, California, United States</br>' +
                        '<strong>+1 760-384-5400</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([33.77137344303238,-80.092833332849], {
                    balloonContent: '1310 N Fraser St, Georgetown, SC 29440, United States</br>' +
                        '9PV7+FF Georgetown, South Carolina, United States</br>' +
                        '<strong>+1 843-527-9970</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([-3.323446044475952,-50.83518459190548], {
                    balloonContent: 'R. Consuelo Borges, 673-879 - Alberto Soares, Altamira - PA, 68376-298, Brazil</br>' +
                        'RR26+MH Altamira, State of Pará, Brazil</br>' +
                        '<strong>+55 93 99196-9192</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([47.908881443901734,1.5409260537733107], {
                    balloonContent: '3 Rue Saint-Michel 5, 28800 Bonneval, France</br>' +
                        '59JM+VP Bonneval, France</br>' +
                        '<strong>+33 2 37 44 55 80</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([30.114305347824516,39.551199406820544], {
                    balloonContent: 'North Ring Road Al Zahra District Saudi Arabia</br>' +
                        'HP3F+H4 Hail Saudi Arabia</br>' +
                        '<strong>+966 9200 00089</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([56.19183650433372,52.961353702034515], {
                    balloonContent: 'Sovetskaya Ulitsa, 43, Mukhino, Kirov Oblast, 612400</br>' +
                        '52MR+JW Mukhino, Kirov Oblast</br>' +
                        '<strong>8 (341) 246-34-63</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([59.95933904573797,56.12541620203454], {
                    balloonContent: 'Ulitsa Vorovskogo, 77, Kirov, Kirov Oblast, 610017</br>' +
                        'HMV4+MP Kirov, Kirov Oblast</br>' +
                        '<strong>8 (833) 257-85-78</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([57.10029782959784,90.4317799802063], {
                    balloonContent: 'Krasnoyarsk, Krasnoyarsk Krai, 660118</br>' +
                        '3WQ9+7V Krasnoyarsk, Krasnoyarsk Krai</br>' +
                        '<strong>8 (391) 220-44-56</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([64.43848602256033,118.23228998469457], {
                    balloonContent: 'Ulitsa Il\'menskaya, 49, Yakutsk, Sakha Republic, 677008</br>' +
                        '2MJ8+4R Yakutsk, Sakha Republic</br>' +
                        '<strong>8 (411) 224-11-21</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([67.81586421155023,110.6736962346946], {
                    balloonContent: 'Ulitsa Lermontova, 64/2, Yakutsk, Sakha Republic, 677000</br>' +
                        '2PP7+7F Yakutsk, Sakha Republic</br>' +
                        '<strong>8 (411) 243-33-22</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }))
                .add(new ymaps.Placemark([-20.60025137929407,145.83323306724301], {
                    balloonContent: 'King St &, Daintree St, Cloncurry QLD 4824, Australia</br>' +
                        '5RF27GW5+8G</br>' +
                        '<strong>+61 7 4742 4153</strong>'
                }, {
                    preset: 'islands#circleDotIcon',
                    iconColor: '#FFCB05'
                }));

            let world = document.getElementsByClassName("map__nav-link")[0];
            let russia = document.getElementsByClassName("map__nav-link")[1];

            world.addEventListener("click", function () {
                world.classList.add("map__nav-link--active");
                russia.classList.remove("map__nav-link--active");
                myMap.setCenter([42.649709104834265,25.236088930049338], 3.2, {
                    duration: 500
                });
            });

            russia.addEventListener("click", function () {
                russia.classList.add("map__nav-link--active");
                world.classList.remove("map__nav-link--active");
                myMap.setCenter([63.99784894297159,91.94167876275864], 4.1, {
                    duration: 500
                });
            });
        }
    });
});
