'use strict';

function father() {

    alert('Welcome!');

    function run() {

        var users = [];
        var user = {};

        console.log('[user]', user);

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
            } else {
                run();
            }
        }

        function showUser(selectedUser) {
            for (var prop in selectedUser) console.log('[' + prop + ']:', selectedUser[prop]);
        }

        choice = prompt('Введите букву для выбора действия:\n' +
            'a) Зарегистрироваться\n' +
            'b) Авторизоваться\n' +
            'c) Посмотреть список всех пользователей\n' +
            'd) Изменить данные пользователя\n' +
            'q) Выйти\n' +
            'Напишите clear для очистки консоля\n', '');

        // Registration

        if (choice === 'a') {

            var user = {
                'name': 'Dmitriy',
                'surname': 'Miroshnychenko',
                'age': '21',
                'email': 'dima@gmail.com',
                'password': '123',
            };

            for (var key in user) {
                var question = prompt('Set your ' + key + ':', '');

                if (question === null) {
                    finish();
                    return;
                };
                user[key] = question;
            }

            users.push(user);

            console.log('[users]', users);
            console.log('Добавлен новый пользователь' + ' ' + user.name + ' ' + user.surname);

            continueRun();


            // Autorization

        } else if (choice === 'b') {
            var currentEmail = prompt('Введите email', '');
            var currentPassword = prompt('Введите пароль', '');

            if (currentEmail === null) {
                finish();
                return;
            }

            var selectedUser = null;

            users.forEach(function (user) {
                if (user.email === currentEmail && user.password === currentPassword) {
                    selectedUser = user;

                    console.log('Авторизация прошла успешно');
                    showUser(selectedUser);

                    continueRun();
                }
            });

            users.forEach(function (user) {
                if (user.email !== currentEmail || user.password !== currentPassword) {
                    console.log('Wrong!');
                    wrongData();
                }
            });

            // List of users

        } else if (choice === 'c') {
            var line = '----------------------------------';

            if (!users.length) {
                console.log(line);
                console.log('%cПользователей зарегистрировано:', 'color: coral', + ' ' + users.length);
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

            var changeUser = prompt('Введите имя редактируемого юзера');
            var changedUser = null;

            users.forEach(function (user) {
                if (changeUser === user.name) {

                    changedUser = user;

                    var name = prompt('Введите Ваше имя:', '');

                    if (name === null) {
                        finish();
                        return;
                    }

                    changedUser['name'] = name;

                    var surname = prompt('Введите Вашу фамилию:', '');

                    if (surname === null) {
                        finish();
                        return;
                    }

                    changedUser['surname'] = surname;

                    var age = prompt('Введите Ваш возраст:', '');

                    if (age === null) {
                        finish();
                        return;
                    }

                    changedUser['age'] = age;


                    var email = prompt('Введите Ваш эмейл:', '');

                    if (email === null) {
                        finish();
                        return;
                    }

                    changedUser['email'] = email;

                    var password = prompt('Введите Ваш пароль:', '');

                    if (password === null) {
                        finish();
                        return;
                    }

                    changedUser['password'] = password;

                    continueRun();
                }
            });

            users.forEach(function (user, i) {
                if (changeUser !== user.name || changeUser !== changedUser.name) {
                    wrongData();
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
}

father();
