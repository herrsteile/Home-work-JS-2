'use strict';

function father() {
    alert('Welcome!');

    var users = [];

    function run() {


        users[0] = {
            name: 'Dmitriy',
            surname: 'Miroshnychenko',
            age: '21',
            email: 'dima@gmail.com',
            password: '123'
        };

        function findEmail(user) {
            return user.email === currentEmail;
        }

        function findPassword(user) {
            return user.password === currentPassword;
        }

        function continueRun() {
            var contRun = confirm('Вернуться к выбору действия?');

            if (!contRun) {
                finish();
                return;
            }
            run();
        }

        function finish() {
            alert('Good bye!');
            return;
        }

        function wrongData() {
            var wrong = confirm('Сначала нужно зарегестрироваться (a)');

            if (!wrong) {
                finish();
                return;
            }
            run();
        }

        // function showUser(selectedUser) {
        //     for (var prop in selectedUser) console.log('[' + prop + ']:', selectedUser[prop]);
        // }

        var choice = prompt('Введите букву для выбора действия:\n' +
            'a) Зарегистрироваться\n' +
            'b) Авторизоваться\n' +
            'c) Посмотреть список всех пользователей\n' +
            'd) Изменить данные пользователя\n' +
            'q) Выйти\n' +
            'Напишите clear для очистки консоля\n', '');

        // Registration

        if (choice === 'a') {

            var user = {};

            for (var key in users[0]) {
                var question = prompt('Set your ' + key + ':', '');

                user[key] = question;

                if (question === null) {
                    finish();
                    return;
                };
            };

            users.push(user);

            console.log('Добавлен новый пользователь ' + user.name + ' ' + user.surname);
            console.log('[users]', users);

            continueRun();

            // Autorization

        } else if (choice === 'b') {
            var currentEmail = prompt('Введите email', '');
            var currentPassword = prompt('Введите пароль', '');

            if (currentEmail === null) {
                finish();
                return;
            }


            // var selectedUser = null;

            if (users.find(findEmail) && users.find(findPassword)) {

                // selectedUser = user;

                console.log('Login was successful!');
                console.log('[name]: ' + user.name);
                console.log('[surname]: ' + user.surname);
                console.log('[age]: ' + user.age);
                console.log('[email]: ' + user.email);
                console.log('[password]: ' + user.password);

                // (function showUser(user) {
                //     for (var prop in user) console.log('[' + prop + ']:', user[prop]);
                // })();

                continueRun();

            } else if (!users.find(findEmail) || !users.find(findPassword)) {
                console.log('Wrong!'); 
                var wrongValue = confirm('Email or password is not correct');

                if (!wrongValue) {
                    finish();
                    return;
                }
                run();
            }

            // List of users

        } else if (choice === 'c') {

            var line = '----------------------------------';

            if (users.length) {
                console.log(line);
                console.log('%cПользователей зарегистрировано:', 'color: coral', + users.length);
                console.log(line);


                users.forEach(function (user) {
                    showUser(user);
                    console.log(line);
                });

                continueRun();

            } else {
                wrongData();
            }
            // Edit users data

        } else if (choice === 'd') {

            var changeUser = prompt('Enter the name of the user being edited');

            users.forEach(function (user) {
                if (changeUser === user.name) {

                    for (var key in users[0]) {
                        var question = prompt('Set your ' + key + ':', '');

                        user[key] = question;

                        if (question === null) {
                            finish();
                            return;
                        };
                    };

                    continueRun();

                } else if (changeUser !== user.name) {
                    console.log('Wrong');
                    wrongData();

                    if (!wrongData) {
                        finish();
                        return;
                    }

                    run();
                }
            });

            // Quit

        } else if (choice === 'q') {

            finish();
            return;

        } else if (choice === 'clear') {

            console.clear();
            run()

        } else if (choice === null) {
            finish();
            return;

        } else {
            alert('Нужно ввести букву: a, b, c, d, или q');
            run();
        }
    }

    run();
}

father();
