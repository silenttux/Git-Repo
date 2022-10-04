"use strict";

// На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать
// миллионером?».
// Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь
// методы, например
// метод run, возможно метод init и т.д.
//     В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
// Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и
// предлагать варианты
// ответов в виде теста, например:
// Сколько букв в слове "привет":
//     a. Пять.
//     b. Шесть.
//     c. Семь.
//     d. Куда я попал?
//     Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
//     По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
// предложить
// сыграть снова.
//     Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.

const task = [
    {
        name: 'Сколько будет 2х2?',
        cases: {
            a: '2',
            b: '4',
            c: '5',
            d: 'бесконечность',
        },
        rightAnswerId: 'b',
    },
    {
        name: 'Куда делся слон, когда пришёл Наполеон?',
        cases: {
            a: 'испарился',
            b: 'под землю',
            c: 'не поле он',
            d: 'убежал в Москву',
        },
        rightAnswerId: 'c',
    },
    {
        name: 'В чем смысл жизни?',
        cases: {
            a: 'в эмоциях',
            b: 'внести свой вклад',
            c: 'в усложнении системы',
            d: 'во всём вышеперечисленном',
        },
        rightAnswerId: 'd',
    },
    {
        name: 'Быть или не быть?',
        cases: {
            a: 'быть',
            b: 'не быть',
            c: 'вопрос некорректен',
            d: 'вопрос риторический',
        },
        rightAnswerId: 'd',
    },
    {
        name: 'Дошёл ли игрок до 5 вопроса?',
        cases: {
            a: 'да',
            b: 'нет',
            c: 'наверно',
            d: 'в основном',
        },
        rightAnswerId: 'a',
    },
];


/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {task} task Массив с объектами вопросов.
 * @property {int} taskId Индекс текущего вопроса из массива.
 * @property {int} pointCount Игрок, участвующий в игре.
 */
const game = {
    task: task,
    pointCount: null,
    taskId: null,

    /**
     * Инициализирует игру.
     */
    init() {
        this.pointCount = 0;
        this.taskId = 0;
    },

    /**
     * Запускает игру.
     */
    run() {
        this.init();
        alert('Сыграем?!');

        while (true) {
            const answer = this.getAnswer();

            if (this.userWantExit(answer)) {
                alert('Пока');
                break;
            }

            if (this.isAnswerCorrect(answer)) {
                alert('Верно');
                this.pointCount++;
            } else {
                alert('Неверно');
            }

            this.taskId++;

            if (this.isGameOver()) {
                alert(`Счёт - ${this.pointCount}`);

                if (!confirm('Ещё разок?')) {
                    break;
                }

                this.init();
            }
        }
    },

    /**
     * Получает ответ на вопрос от пользователя.
     * @returns {string} Строка ответа пользователя.
     */
    getAnswer() {
        while (true) {
            let answer = prompt(this.getCurrentQuestionString());

            if (answer === null) {
                alert('Чтобы выйти, введи "x"');
                continue;
            }

            answer = answer.trim().toLowerCase();

            if (!this.goodAnswer(answer)) {
                alert('Ты можешь ввести только буквы a,b,c,d,x');
                continue;
            }

            return answer;
        }
    },

    /**
     * Возвращает строку с текущим вопросом и вариантами ответов.
     * @returns {string} Строка с текущим вопросом и вариантами ответов.
     */
    getCurrentQuestionString() {
        const task = this.task[this.taskId];

        let questionString = `Вопрос: ${task.name} \n\n Варианты ответов:\n`;
        for (const key in task.cases) {
            if (task.cases.hasOwnProperty(key)) {
                questionString += `${key} - ${task.cases[key]}\n`;
            }
        }
        return questionString;
    },

    /**
     * Проверяем ответ пользователя на корректность ввода.
     * @param {string} userAnswer Ответ пользователя.
     * @returns {boolean} true Если пользователь ввел корректные данные, иначе false.
     */
    goodAnswer(userAnswer) {
        return ['a', 'b', 'c', 'd', 'x'].indexOf(userAnswer) !== -1;
    },

    /**
     * Проверяет, ввел ли пользователь команду выхода из игры.
     * @param {string} userAnswer Ответ пользователя
     * @returns {boolean} true Если пользователь хотел выйти.
     */
    userWantExit(userAnswer) {
        return userAnswer === 'x';
    },

    /**
     * Проверяет верен ли ответ пользователя.
     * @param {string} userAnswer Ответ пользователя.
     * @returns {boolean} true Если ответ верен.
     */
    isAnswerCorrect(userAnswer) {
        return this.task[this.taskId].rightAnswerId === userAnswer;
    },

    /**
     * Проверяет, закончена ли игра.
     * @returns {boolean} true Если были заданы все вопросы.
     */
    isGameOver() {
        return this.taskId > 4;
    }
};

// Запускаем игру.
game.run();