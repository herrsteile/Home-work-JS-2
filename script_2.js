'use strict';

function father() {
    alert('Welcome!');

    var users = [];
    var user = {};

    function run() {
        users[0] = {
            name: 'Dmitriy',
            surname: 'Miroshnychenko',
            age: '21',
            email: 'dima@gmail.com',
            password: '123'
        };

        function correctEmail(user) {
            return user.email === currentEmail;
        }

        function correctPassword(user) {
            return user.password === currentPassword;
        }

        function correctName(user) {
            return user.name === changeUser;
        }

        function showUser(user) {
            for (var prop in user) console.log('[' + prop + ']:', user[prop]);
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

        var choice = prompt('Введите букву для выбора действия:\n' +
            'a) Зарегистрироваться\n' +
            'b) Авторизоваться\n' +
            'c) Посмотреть список всех пользователей\n' +
            'd) Изменить данные пользователя\n' +
            'q) Выйти\n' +
            'Напишите clear для очистки консоля\n', '');

        // Registration

        if (choice === 'a') {
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
            continueRun();

            // Autorization

        } else if (choice === 'b') {
            var currentEmail = prompt('Введите email', '');
            var currentPassword = prompt('Введите пароль', '');

            if (currentEmail === null) {
                finish();
                return;
            }

            if (users.find(correctEmail) && users.find(correctPassword)) {
                console.log('Login successful!');

                var selectedUser = user;

                showUser(selectedUser);
                continueRun();

            } else if (!users.find(correctEmailAndPassword) || !users.find(correctPassword)) {
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

            if (users.find(correctName)) {
                for (var key in users[0]) {
                    var question = prompt('Set your ' + key + ':', '');

                    if (question === '') continue;

                    user[key] = question;

                    if (question === null) {
                        finish();
                        return;
                    };
                };

                continueRun();
            } else if (!correctName) {
                console.log('Wrong');
                wrongData();

                if (!wrongData) {
                    finish();
                    return;
                }
                run();
            }

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
