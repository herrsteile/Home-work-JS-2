'use strict';

var choice;
var registration = 'a) Зарегистрироваться\n';
var autorization = 'b) Авторизоваться\n';
var listOfUsers = 'c) Посмотреть список всех пользователей\n';
var changeData = 'd) Изменить данные пользователя\n';
var quit = 'q) Выйти\n';
var clear = 'Напишите clear для очистки консоля\n';
var users = [];
var user = {};
var userName;
var obj;
var line = '----------------------------------';

function continueRun() {
    var contRun = confirm('Вернуться к выбору действия?');

    if (!contRun) {
        finish();
        return;
    }

    run();
}

function finish() {
    var end = confirm('Good bye!');

    if (end === false) {
        return;
    } else {
        return;
    }
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

alert('Welcome!');

function run() {
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

        var name = prompt('Введите Ваше имя:', '');

        if (name === null) {
            finish();
            return;
        }

        user['name'] = name;

        var surname = prompt('Введите Вашу фамилию:', '');

        if (surname === null) {
            finish();
            return;
        }

        user['surname'] = surname;

        var age = prompt('Введите Ваш возраст:', '');

        if (age === null) {
            finish();
            return;
        }

        user['age'] = age;


        var email = prompt('Введите Ваш эмейл:', '');

        if (email === null) {
            finish();
            return;
        }

        user['email'] = email;

        var password = prompt('Введите Ваш пароль:', '');

        if (password === null) {
            finish();
            return;
        }

        user['password'] = password;

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
        if (users.length !== 0) {
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

run();
