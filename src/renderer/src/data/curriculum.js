// Учебный план тренажёра. Минимум теории — максимум практики.
// Каждое задание: теория (кратко), задача, заготовка, решение, подсказки, правила проверки.

export const modules = [
  {
    id: 'java-core',
    title: 'Java Core',
    subtitle: 'Основы языка',
    icon: 'Coffee',
    color: '#f59e0b',
    tasks: [
      {
        id: 'jc-1',
        title: 'Первая программа',
        difficulty: 'Лёгкое',
        theory:
          'Любая Java-программа начинается с **класса**. Точка входа — метод `public static void main(String[] args)`. Вывод в консоль — `System.out.println(...)`.',
        task: 'Создай класс `Main` с методом `main`, который выводит в консоль строку `Hello, Java!`.',
        starter: `public class Main {
    public static void main(String[] args) {
        // напиши вывод строки здесь
    }
}`,
        solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        run: { expected: 'Hello, Java!' },
        hints: [
          'Для вывода используется System.out.println(...)',
          'Строка заключается в двойные кавычки: "Hello, Java!"'
        ],
        checks: [
          { type: 'contains', value: 'class Main', message: 'Объявлен класс Main' },
          { type: 'regex', value: 'static\\s+void\\s+main', message: 'Есть метод main' },
          { type: 'contains', value: 'System.out.println', message: 'Используется вывод в консоль' },
          { type: 'contains', value: 'Hello, Java!', message: 'Выводится нужная строка' }
        ]
      },
      {
        id: 'jc-2',
        title: 'Переменные и типы',
        difficulty: 'Лёгкое',
        theory:
          'Java — статически типизированный язык. Основные типы: `int` (целое), `double` (дробное), `boolean` (да/нет), `String` (строка). Переменная объявляется как `тип имя = значение;`.',
        task: 'Объяви `int age = 25` и `String name = "Anna"`, затем выведи их в одну строку в формате `Anna 25` (имя, пробел, возраст).',
        starter: `public class Main {
    public static void main(String[] args) {
        // объяви переменные и выведи их
    }
}`,
        solution: `public class Main {
    public static void main(String[] args) {
        int age = 25;
        String name = "Anna";
        System.out.println(name + " " + age);
    }
}`,
        run: { expected: 'Anna 25' },
        hints: [
          'int age = 25;',
          'Строки можно склеивать оператором +'
        ],
        checks: [
          { type: 'regex', value: 'int\\s+age\\s*=\\s*25', message: 'Объявлена int age = 25' },
          { type: 'regex', value: 'String\\s+name\\s*=', message: 'Объявлена String name' },
          { type: 'contains', value: 'Anna', message: 'Значение имени — Anna' },
          { type: 'contains', value: 'System.out.println', message: 'Есть вывод в консоль' }
        ]
      },
      {
        id: 'jc-3',
        title: 'Методы',
        difficulty: 'Лёгкое',
        theory:
          'Метод — это переиспользуемый блок кода. Сигнатура: `модификатор тип имя(параметры)`. Если метод возвращает значение — указываем тип и `return`.',
        task: 'Напиши статический метод `sum(int a, int b)`, возвращающий сумму. В `main` выведи результат вызова `sum(2, 3)` (то есть `5`).',
        starter: `public class Main {
    // объяви метод sum здесь

    public static void main(String[] args) {
        // вызови sum и выведи результат
    }
}`,
        solution: `public class Main {
    static int sum(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println(sum(2, 3));
    }
}`,
        run: { expected: '5' },
        hints: [
          'Метод возвращает int, поэтому тип возврата — int',
          'Внутри метода: return a + b;',
          'В main: System.out.println(sum(2, 3));'
        ],
        checks: [
          { type: 'regex', value: 'int\\s+sum\\s*\\(', message: 'Объявлен метод sum, возвращающий int' },
          { type: 'contains', value: 'return', message: 'Метод возвращает значение через return' },
          { type: 'regex', value: 'sum\\s*\\(', message: 'Метод sum вызывается' }
        ]
      },
      {
        id: 'jc-4',
        title: 'Классы и объекты',
        difficulty: 'Среднее',
        theory:
          'Класс описывает данные (**поля**) и поведение (**методы**). Объект создаётся через `new`. Хорошая практика — приватные поля + конструктор + геттеры (паттерн POJO).',
        task: 'Создай класс `User` с приватными полями `name` (String) и `age` (int), конструктором и геттерами `getName()` и `getAge()`.',
        starter: `public class User {
    // поля

    // конструктор

    // геттеры
}`,
        solution: `public class User {
    private String name;
    private int age;

    public User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}`,
        run: {
          expected: 'Anna 25',
          harness: `class Main {
    public static void main(String[] args) {
        User u = new User("Anna", 25);
        System.out.println(u.getName() + " " + u.getAge());
    }
}`
        },
        hints: [
          'Поля делаем private: private String name;',
          'Конструктор: public User(String name, int age) { this.name = name; ... }',
          'Геттер: public String getName() { return name; }'
        ],
        checks: [
          { type: 'contains', value: 'class User', message: 'Объявлен класс User' },
          { type: 'regex', value: 'private\\s+String\\s+name', message: 'Приватное поле name' },
          { type: 'regex', value: 'private\\s+int\\s+age', message: 'Приватное поле age' },
          { type: 'regex', value: 'public\\s+User\\s*\\(', message: 'Есть конструктор' },
          { type: 'contains', value: 'getName', message: 'Есть геттер getName' },
          { type: 'contains', value: 'getAge', message: 'Есть геттер getAge' }
        ]
      },
      {
        id: 'jc-5',
        title: 'Коллекции и Stream',
        difficulty: 'Среднее',
        theory:
          '`List<T>` — упорядоченный список. Stream API позволяет обрабатывать коллекции декларативно: `.stream().filter(...).collect(...)`. Это основа современного Java-кода.',
        task: 'Дан список чисел. Через Stream API отфильтруй чётные в список `even` и выведи его — ожидается `[2, 4, 6]`.',
        starter: `import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);
        // получи список чётных чисел в переменную even
    }
}`,
        solution: `import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6);
        List<Integer> even = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());
        System.out.println(even);
    }
}`,
        run: { expected: '[2, 4, 6]' },
        hints: [
          'numbers.stream() — начало потока',
          'Чётность: n % 2 == 0',
          '.filter(n -> n % 2 == 0).collect(Collectors.toList())'
        ],
        checks: [
          { type: 'contains', value: '.stream()', message: 'Используется Stream' },
          { type: 'contains', value: '.filter(', message: 'Применён filter' },
          { type: 'regex', value: '%\\s*2\\s*==\\s*0', message: 'Условие чётности n % 2 == 0' },
          { type: 'contains', value: '.collect(', message: 'Результат собран через collect' },
          { type: 'regex', value: 'even', message: 'Результат записан в переменную even' }
        ]
      },
      {
        id: 'jc-6',
        title: 'Условия и циклы',
        difficulty: 'Лёгкое',
        theory:
          '`if/else` управляет ветвлением. Цикл `for (int i = 0; i < n; i++)` повторяет действие. Оператор `+=` прибавляет к переменной.',
        task: 'Напиши метод `sumTo(int n)`, который циклом `for` считает сумму чисел от 1 до n и возвращает её.',
        starter: `public class Main {
    static int sumTo(int n) {
        // посчитай сумму 1..n циклом
    }

    public static void main(String[] args) {
        System.out.println(sumTo(5)); // ожидаем 15
    }
}`,
        solution: `public class Main {
    static int sumTo(int n) {
        int sum = 0;
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }

    public static void main(String[] args) {
        System.out.println(sumTo(5));
    }
}`,
        run: { expected: '15' },
        hints: [
          'Заведи аккумулятор: int sum = 0;',
          'Цикл: for (int i = 1; i <= n; i++)',
          'Внутри sum += i; в конце return sum;'
        ],
        checks: [
          { type: 'regex', value: 'int\\s+sumTo\\s*\\(', message: 'Объявлен метод sumTo' },
          { type: 'regex', value: 'for\\s*\\(', message: 'Используется цикл for' },
          { type: 'regex', value: '\\+=|sum\\s*=\\s*sum\\s*\\+', message: 'Сумма накапливается' },
          { type: 'contains', value: 'return', message: 'Метод возвращает результат' }
        ]
      },
      {
        id: 'jc-7',
        title: 'Наследование',
        difficulty: 'Среднее',
        theory:
          'Класс наследует другой через `extends` и может **переопределять** методы. Аннотация `@Override` помечает переопределённый метод и защищает от опечаток.',
        task: 'Дан класс `Animal` с методом `sound()`. Создай класс `Dog`, который наследует `Animal` и переопределяет `sound()`, возвращая "Gav".',
        starter: `class Animal {
    String sound() {
        return "...";
    }
}

// создай Dog, наследующий Animal, и переопредели sound()
`,
        solution: `class Animal {
    String sound() {
        return "...";
    }
}

class Dog extends Animal {
    @Override
    String sound() {
        return "Gav";
    }
}`,
        run: {
          expected: 'Gav',
          harness: `class Main {
    public static void main(String[] args) {
        System.out.println(new Dog().sound());
    }
}`
        },
        hints: [
          'Объявление: class Dog extends Animal',
          'Переопредели метод и пометь его @Override',
          'Верни "Gav"'
        ],
        checks: [
          { type: 'regex', value: 'class\\s+Dog\\s+extends\\s+Animal', message: 'Dog наследует Animal' },
          { type: 'contains', value: '@Override', message: 'Метод помечен @Override' },
          { type: 'contains', value: 'Gav', message: 'sound() возвращает Gav' }
        ]
      },
      {
        id: 'jc-8',
        title: 'Интерфейсы',
        difficulty: 'Среднее',
        theory:
          'Интерфейс задаёт **контракт** — набор методов без реализации. Класс реализует его через `implements` и обязан определить все методы.',
        task: 'Дан интерфейс `Shape` с методом `double area()`. Создай класс `Circle implements Shape` с полем `radius` и реализацией площади круга (`Math.PI * radius * radius`).',
        starter: `interface Shape {
    double area();
}

// реализуй Circle implements Shape
`,
        solution: `interface Shape {
    double area();
}

class Circle implements Shape {
    private double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}`,
        run: {
          expected: '12.57',
          harness: `class Main {
    public static void main(String[] args) {
        System.out.println(String.format(java.util.Locale.US, "%.2f", new Circle(2).area()));
    }
}`
        },
        hints: [
          'class Circle implements Shape',
          'Добавь поле radius и конструктор',
          'area(): return Math.PI * radius * radius;'
        ],
        checks: [
          { type: 'regex', value: 'class\\s+Circle\\s+implements\\s+Shape', message: 'Circle реализует Shape' },
          { type: 'regex', value: 'double\\s+area\\s*\\(', message: 'Реализован метод area()' },
          { type: 'contains', value: 'Math.PI', message: 'Площадь считается через Math.PI' }
        ]
      },
      {
        id: 'jc-9',
        title: 'Исключения',
        difficulty: 'Среднее',
        theory:
          'Ошибки во время выполнения обрабатывают через `try/catch`. Своё исключение выбрасывают оператором `throw`. Например, `IllegalArgumentException` для неверного аргумента.',
        task: 'В методе `divide(int a, int b)` при `b == 0` выброси `IllegalArgumentException`, иначе верни `a / b`. В `main` вызови метод внутри `try/catch`.',
        starter: `public class Main {
    static int divide(int a, int b) {
        // при делении на ноль выброси исключение
        return a / b;
    }

    public static void main(String[] args) {
        // вызови divide(10, 0) внутри try/catch
    }
}`,
        solution: `public class Main {
    static int divide(int a, int b) {
        if (b == 0) {
            throw new IllegalArgumentException("b не может быть 0");
        }
        return a / b;
    }

    public static void main(String[] args) {
        try {
            System.out.println(divide(10, 0));
        } catch (IllegalArgumentException e) {
            System.out.println("Ошибка: " + e.getMessage());
        }
    }
}`,
        hints: [
          'Проверь условие if (b == 0)',
          'Выброс: throw new IllegalArgumentException("...")',
          'Оберни вызов: try { ... } catch (IllegalArgumentException e) { ... }'
        ],
        checks: [
          { type: 'regex', value: 'b\\s*==\\s*0', message: 'Есть проверка деления на ноль' },
          { type: 'contains', value: 'throw new', message: 'Исключение выбрасывается через throw' },
          { type: 'contains', value: 'IllegalArgumentException', message: 'Используется IllegalArgumentException' },
          { type: 'contains', value: 'try', message: 'Есть блок try' },
          { type: 'contains', value: 'catch', message: 'Есть блок catch' }
        ]
      },
      {
        id: 'jc-10',
        title: 'Map (словарь)',
        difficulty: 'Лёгкое',
        theory:
          '`Map<K, V>` хранит пары «ключ → значение». `put(k, v)` кладёт, `get(k)` достаёт, `getOrDefault(k, def)` — со значением по умолчанию.',
        task: 'Создай `Map<String, Integer>`, положи `"a" → 1` и `"b" → 2`, затем выведи значение по ключу `"b"` (ожидается `2`).',
        starter: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        // положи пары и выведи значение по ключу "b"
    }
}`,
        solution: `import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("a", 1);
        map.put("b", 2);
        System.out.println(map.get("b"));
    }
}`,
        run: { expected: '2' },
        hints: [
          'Положить пару: map.put("a", 1);',
          'Достать значение: map.get("b")'
        ],
        checks: [
          { type: 'contains', value: 'Map<', message: 'Объявлен Map' },
          { type: 'contains', value: 'HashMap', message: 'Используется HashMap' },
          { type: 'contains', value: '.put(', message: 'Элементы добавлены через put' },
          { type: 'contains', value: '.get(', message: 'Значение получено через get' }
        ]
      },
      {
        id: 'jc-11',
        title: 'Перечисления (enum)',
        difficulty: 'Лёгкое',
        theory:
          '`enum` задаёт фиксированный набор констант — например статусы. Имя константы печатается как строка.',
        task: 'Объяви `enum Status { NEW, ACTIVE, DONE }` и выведи `Status.ACTIVE` (ожидается `ACTIVE`).',
        starter: `public class Main {
    enum Status {
        // NEW, ACTIVE, DONE
    }

    public static void main(String[] args) {
        // выведи Status.ACTIVE
    }
}`,
        solution: `public class Main {
    enum Status {
        NEW, ACTIVE, DONE
    }

    public static void main(String[] args) {
        System.out.println(Status.ACTIVE);
    }
}`,
        run: { expected: 'ACTIVE' },
        hints: [
          'Константы перечисляются через запятую: NEW, ACTIVE, DONE',
          'Доступ: Status.ACTIVE'
        ],
        checks: [
          { type: 'regex', value: 'enum\\s+Status', message: 'Объявлен enum Status' },
          { type: 'contains', value: 'NEW', message: 'Есть константа NEW' },
          { type: 'contains', value: 'ACTIVE', message: 'Есть константа ACTIVE' },
          { type: 'contains', value: 'DONE', message: 'Есть константа DONE' }
        ]
      },
      {
        id: 'jc-12',
        title: 'Дженерики',
        difficulty: 'Среднее',
        theory:
          'Дженерики (`<T>`) позволяют писать типобезопасный код для любого типа. Обобщённый класс `Box<T>` хранит значение типа `T`.',
        task: 'Реализуй обобщённый класс `Box<T>` с полем `value`, конструктором и методом `get()`. Для `new Box<>("hi")` ожидается вывод `hi`.',
        starter: `public class Main {
    static class Box<T> {
        // поле value типа T, конструктор, метод get()
    }

    public static void main(String[] args) {
        Box<String> b = new Box<>("hi");
        System.out.println(b.get());
    }
}`,
        solution: `public class Main {
    static class Box<T> {
        private T value;

        public Box(T value) {
            this.value = value;
        }

        public T get() {
            return value;
        }
    }

    public static void main(String[] args) {
        Box<String> b = new Box<>("hi");
        System.out.println(b.get());
    }
}`,
        run: { expected: 'hi' },
        hints: [
          'Поле: private T value;',
          'Конструктор: public Box(T value) { this.value = value; }',
          'Метод: public T get() { return value; }'
        ],
        checks: [
          { type: 'regex', value: 'class\\s+Box\\s*<\\s*T\\s*>', message: 'Объявлен обобщённый класс Box<T>' },
          { type: 'regex', value: 'T\\s+value', message: 'Поле value типа T' },
          { type: 'regex', value: 'T\\s+get\\s*\\(', message: 'Метод get() возвращает T' }
        ]
      },
      {
        id: 'jc-13',
        title: 'Optional',
        difficulty: 'Среднее',
        theory:
          '`Optional<T>` — контейнер, который может содержать значение или быть пустым. Защищает от `NullPointerException`. `orElse(x)` возвращает значение или запасное `x`.',
        task: 'Дан `Optional<String> name = Optional.empty()`. Выведи значение, а если пусто — `"guest"` (ожидается `guest`).',
        starter: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> name = Optional.empty();
        // выведи значение или "guest"
    }
}`,
        solution: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> name = Optional.empty();
        System.out.println(name.orElse("guest"));
    }
}`,
        run: { expected: 'guest' },
        hints: [
          'Запасное значение: name.orElse("guest")',
          'Выведи результат через System.out.println(...)'
        ],
        checks: [
          { type: 'contains', value: 'Optional', message: 'Используется Optional' },
          { type: 'contains', value: 'orElse', message: 'Запасное значение через orElse' },
          { type: 'contains', value: 'guest', message: 'Значение по умолчанию — guest' }
        ]
      },
      {
        id: 'jc-14',
        title: 'Лямбды и функциональные интерфейсы',
        difficulty: 'Среднее',
        theory:
          'Лямбда — короткая запись функции: `n -> n > 0`. `Predicate<T>` — функция, возвращающая `boolean`; вызывается через `.test(x)`.',
        task: 'Создай `Predicate<Integer> isEven`, проверяющий чётность числа, и выведи `isEven.test(4)` (ожидается `true`).',
        starter: `import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        Predicate<Integer> isEven = null; // замени на лямбду
        System.out.println(isEven.test(4));
    }
}`,
        solution: `import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(4));
    }
}`,
        run: { expected: 'true' },
        hints: [
          'Лямбда: n -> n % 2 == 0',
          'Проверка чётности: остаток от деления на 2 равен 0'
        ],
        checks: [
          { type: 'contains', value: 'Predicate', message: 'Используется Predicate' },
          { type: 'contains', value: '->', message: 'Написана лямбда' },
          { type: 'regex', value: '%\\s*2\\s*==\\s*0', message: 'Условие чётности' },
          { type: 'contains', value: '.test(', message: 'Вызов через test()' }
        ]
      },
      {
        id: 'jc-15',
        title: 'Stream: map и сумма',
        difficulty: 'Среднее',
        theory:
          '`map` преобразует каждый элемент потока, а `sum`/`reduce` сворачивают поток в одно значение. Для чисел удобен `mapToInt(...).sum()`.',
        task: 'Дан список `1, 2, 3, 4`. Через Stream возведи каждое число в квадрат и посчитай сумму (ожидается `30`).',
        starter: `import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 2, 3, 4);
        // сумма квадратов через stream().map...().sum()
    }
}`,
        solution: `import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<Integer> nums = List.of(1, 2, 3, 4);
        int sum = nums.stream()
                .mapToInt(n -> n * n)
                .sum();
        System.out.println(sum);
    }
}`,
        run: { expected: '30' },
        hints: [
          'Преобразование: .mapToInt(n -> n * n)',
          'Свёртка: .sum()',
          'Не забудь вывести результат'
        ],
        checks: [
          { type: 'contains', value: '.stream()', message: 'Используется Stream' },
          { type: 'regex', value: 'map', message: 'Применён map / mapToInt' },
          { type: 'regex', value: 'sum\\s*\\(|reduce\\s*\\(', message: 'Свёртка через sum или reduce' }
        ]
      },
      {
        id: 'jc-16',
        title: 'toString и представление объекта',
        difficulty: 'Среднее',
        theory:
          'Переопределение `toString()` задаёт, как объект печатается. Без него выводится служебная строка вида `Point@1b6d3586`.',
        task: 'В классе `Point(int x, int y)` переопредели `toString()`, чтобы он возвращал формат `(x, y)`. Для `new Point(1, 2)` ожидается `(1, 2)`.',
        starter: `public class Main {
    static class Point {
        int x, y;
        Point(int x, int y) { this.x = x; this.y = y; }
        // переопредели toString() -> "(x, y)"
    }

    public static void main(String[] args) {
        System.out.println(new Point(1, 2));
    }
}`,
        solution: `public class Main {
    static class Point {
        int x, y;
        Point(int x, int y) { this.x = x; this.y = y; }

        @Override
        public String toString() {
            return "(" + x + ", " + y + ")";
        }
    }

    public static void main(String[] args) {
        System.out.println(new Point(1, 2));
    }
}`,
        run: { expected: '(1, 2)' },
        hints: [
          'Сигнатура: @Override public String toString()',
          'Собери строку: "(" + x + ", " + y + ")"'
        ],
        checks: [
          { type: 'contains', value: '@Override', message: 'Метод помечен @Override' },
          { type: 'contains', value: 'toString', message: 'Переопределён toString()' }
        ]
      },
      {
        id: 'jc-17',
        title: 'Абстрактные классы',
        difficulty: 'Среднее',
        theory:
          'Абстрактный класс нельзя создать через `new` — он задаёт каркас и абстрактные методы, которые обязаны реализовать наследники.',
        task: 'Дан абстрактный класс `Figure` с методом `name()`. Создай `Square extends Figure`, возвращающий `"square"`. Для `new Square().name()` ожидается `square`.',
        starter: `public class Main {
    abstract static class Figure {
        abstract String name();
    }

    // создай Square extends Figure

    public static void main(String[] args) {
        System.out.println(new Square().name());
    }
}`,
        solution: `public class Main {
    abstract static class Figure {
        abstract String name();
    }

    static class Square extends Figure {
        @Override
        String name() {
            return "square";
        }
    }

    public static void main(String[] args) {
        System.out.println(new Square().name());
    }
}`,
        run: { expected: 'square' },
        hints: [
          'class Square extends Figure',
          'Реализуй метод name() и верни "square"'
        ],
        checks: [
          { type: 'contains', value: 'abstract', message: 'Используется abstract' },
          { type: 'regex', value: 'class\\s+Square\\s+extends\\s+Figure', message: 'Square наследует Figure' },
          { type: 'contains', value: 'square', message: 'name() возвращает square' }
        ]
      }
    ]
  },
  {
    id: 'spring-boot',
    title: 'Spring Boot',
    subtitle: 'Веб и DI',
    icon: 'Leaf',
    color: '#22c55e',
    tasks: [
      {
        id: 'sb-1',
        title: 'Точка входа приложения',
        difficulty: 'Лёгкое',
        theory:
          'Spring Boot приложение помечается аннотацией `@SpringBootApplication`. Запуск — `SpringApplication.run(Класс.class, args)` в методе `main`.',
        task: 'Создай класс `App` с аннотацией `@SpringBootApplication` и методом `main`, запускающим приложение.',
        starter: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// добавь аннотацию
public class App {
    public static void main(String[] args) {
        // запусти приложение
    }
}`,
        solution: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}`,
        hints: [
          'Аннотация ставится над классом: @SpringBootApplication',
          'SpringApplication.run(App.class, args);'
        ],
        checks: [
          { type: 'contains', value: '@SpringBootApplication', message: 'Класс помечен @SpringBootApplication' },
          { type: 'contains', value: 'class App', message: 'Объявлен класс App' },
          { type: 'regex', value: 'SpringApplication\\.run\\(', message: 'Приложение запускается через SpringApplication.run' }
        ]
      },
      {
        id: 'sb-2',
        title: 'REST-контроллер',
        difficulty: 'Лёгкое',
        theory:
          '`@RestController` помечает класс, обрабатывающий HTTP-запросы. `@GetMapping("/path")` связывает метод с GET-запросом. Возвращаемое значение становится телом ответа.',
        task: 'Создай контроллер `HelloController` с методом, который на GET-запрос `/hello` возвращает строку `"Hello!"`.',
        starter: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// добавь аннотацию контроллера
public class HelloController {
    // добавь метод с @GetMapping("/hello")
}`,
        solution: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello() {
        return "Hello!";
    }
}`,
        hints: [
          'Над классом: @RestController',
          'Над методом: @GetMapping("/hello")',
          'Метод возвращает String "Hello!"'
        ],
        checks: [
          { type: 'contains', value: '@RestController', message: 'Класс помечен @RestController' },
          { type: 'regex', value: '@GetMapping\\(\\s*"/hello"', message: 'Метод связан с GET /hello' },
          { type: 'contains', value: 'Hello!', message: 'Возвращается строка Hello!' }
        ]
      },
      {
        id: 'sb-3',
        title: 'Внедрение зависимостей (DI)',
        difficulty: 'Среднее',
        theory:
          'Бизнес-логику выносят в `@Service`. Spring сам создаёт объекты (бины) и **внедряет** их. Современный способ — внедрение через конструктор (рекомендуется вместо `@Autowired` на поле).',
        task: 'Создай класс `UserService` с аннотацией `@Service`. В `UserController` внедри его через конструктор.',
        starter: `import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

@Service
class UserService {
    public String greeting() {
        return "Hi from service";
    }
}

@RestController
public class UserController {
    // внедри UserService через конструктор
}`,
        solution: `import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

@Service
class UserService {
    public String greeting() {
        return "Hi from service";
    }
}

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
}`,
        hints: [
          'Объяви поле: private final UserService userService;',
          'Конструктор контроллера принимает UserService и сохраняет его в поле',
          'Spring сам передаст бин в конструктор'
        ],
        checks: [
          { type: 'contains', value: '@Service', message: 'Сервис помечен @Service' },
          { type: 'regex', value: 'private\\s+final\\s+UserService', message: 'Поле UserService объявлено как final' },
          { type: 'regex', value: 'public\\s+UserController\\s*\\(\\s*UserService', message: 'UserService внедряется через конструктор' },
          { type: 'contains', value: 'this.userService', message: 'Зависимость сохраняется в поле' }
        ]
      },
      {
        id: 'sb-4',
        title: 'POST, тело запроса и путь',
        difficulty: 'Среднее',
        theory:
          '`@PostMapping` — обработка POST. `@RequestBody` превращает JSON из тела запроса в объект. `@PathVariable` достаёт значение из URL, например `/users/{id}`.',
        task: 'Добавь метод `create`, принимающий объект `User` из тела запроса (`@RequestBody`) на POST `/users`, и метод `getById`, достающий `id` из пути `/users/{id}` (`@PathVariable`).',
        starter: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    // POST /users — принять User из тела запроса

    // GET /users/{id} — достать id из пути
}

class User {
    public String name;
}`,
        solution: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @PostMapping
    public User create(@RequestBody User user) {
        return user;
    }

    @GetMapping("/{id}")
    public String getById(@PathVariable Long id) {
        return "User " + id;
    }
}

class User {
    public String name;
}`,
        hints: [
          '@PostMapping над методом create',
          'Параметр тела: @RequestBody User user',
          '@GetMapping("/{id}") и @PathVariable Long id'
        ],
        checks: [
          { type: 'contains', value: '@PostMapping', message: 'Есть @PostMapping' },
          { type: 'contains', value: '@RequestBody', message: 'Тело запроса читается через @RequestBody' },
          { type: 'regex', value: '@GetMapping\\(\\s*"/\\{id\\}"', message: 'GET-метод с путём /{id}' },
          { type: 'contains', value: '@PathVariable', message: 'id берётся через @PathVariable' }
        ]
      },
      {
        id: 'sb-5',
        title: 'Ответ с кодом статуса',
        difficulty: 'Среднее',
        theory:
          '`ResponseEntity<T>` позволяет управлять HTTP-ответом: телом, статусом и заголовками. Например `ResponseEntity.ok(data)` вернёт 200, а `ResponseEntity.status(404)...` — нужный код.',
        task: 'Сделай метод `find`, который возвращает `ResponseEntity<String>`: при `id > 0` — `ResponseEntity.ok("found")`, иначе — статус 404 через `ResponseEntity.notFound().build()`.',
        starter: `import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {

    @GetMapping("/items/{id}")
    public ResponseEntity<String> find(@PathVariable Long id) {
        // верни 200 или 404 в зависимости от id
    }
}`,
        solution: `import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {

    @GetMapping("/items/{id}")
    public ResponseEntity<String> find(@PathVariable Long id) {
        if (id > 0) {
            return ResponseEntity.ok("found");
        }
        return ResponseEntity.notFound().build();
    }
}`,
        hints: [
          'Проверь условие if (id > 0)',
          'Успех: return ResponseEntity.ok("found");',
          'Не найдено: return ResponseEntity.notFound().build();'
        ],
        checks: [
          { type: 'contains', value: 'ResponseEntity', message: 'Используется ResponseEntity' },
          { type: 'contains', value: 'ResponseEntity.ok(', message: 'Возврат 200 через ResponseEntity.ok' },
          { type: 'contains', value: 'notFound()', message: 'Возврат 404 через notFound()' },
          { type: 'regex', value: 'id\\s*>\\s*0', message: 'Есть проверка условия по id' }
        ]
      },
      {
        id: 'sb-6',
        title: 'Параметры запроса',
        difficulty: 'Лёгкое',
        theory:
          '`@RequestParam` достаёт параметр из строки запроса, например `/search?q=java`. Можно задать `defaultValue` и `required = false`.',
        task: 'Сделай метод на GET `/search`, принимающий параметр `q` через `@RequestParam` и возвращающий строку `"Ищу: " + q`.',
        starter: `import org.springframework.web.bind.annotation.*;

@RestController
public class SearchController {

    @GetMapping("/search")
    public String search(/* параметр q */) {
        // верни "Ищу: " + q
    }
}`,
        solution: `import org.springframework.web.bind.annotation.*;

@RestController
public class SearchController {

    @GetMapping("/search")
    public String search(@RequestParam String q) {
        return "Ищу: " + q;
    }
}`,
        hints: [
          'Параметр метода: @RequestParam String q',
          'Верни "Ищу: " + q'
        ],
        checks: [
          { type: 'contains', value: '@RequestParam', message: 'Параметр читается через @RequestParam' },
          { type: 'regex', value: '@GetMapping\\(\\s*"/search"', message: 'Метод связан с GET /search' },
          { type: 'contains', value: 'Ищу:', message: 'Возвращается нужная строка' }
        ]
      },
      {
        id: 'sb-7',
        title: 'Обработка ошибок',
        difficulty: 'Среднее',
        theory:
          'Аннотация `@ResponseStatus` над исключением задаёт HTTP-код ответа. Так `NotFoundException` автоматически вернёт клиенту 404.',
        task: 'Создай исключение `NotFoundException`, наследующее `RuntimeException`, и пометь его `@ResponseStatus(HttpStatus.NOT_FOUND)`.',
        starter: `import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// пометь исключение кодом 404
public class NotFoundException extends RuntimeException {
}`,
        solution: `import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotFoundException extends RuntimeException {
}`,
        hints: [
          'Над классом: @ResponseStatus(HttpStatus.NOT_FOUND)',
          'Исключение должно наследовать RuntimeException'
        ],
        checks: [
          { type: 'contains', value: '@ResponseStatus', message: 'Используется @ResponseStatus' },
          { type: 'contains', value: 'HttpStatus.NOT_FOUND', message: 'Задан код 404 (NOT_FOUND)' },
          { type: 'regex', value: 'extends\\s+RuntimeException', message: 'Наследует RuntimeException' }
        ]
      },
      {
        id: 'sb-8',
        title: 'Конфигурация и бины',
        difficulty: 'Среднее',
        theory:
          'Класс с `@Configuration` описывает бины вручную. Метод, помеченный `@Bean`, возвращает объект, который Spring помещает в контейнер и внедряет в другие компоненты.',
        task: 'Создай класс `AppConfig` с `@Configuration` и методом `greeting()` с `@Bean`, возвращающим строку `"Hello bean"`.',
        starter: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// пометь класс как конфигурацию
public class AppConfig {
    // объяви бин greeting, возвращающий "Hello bean"
}`,
        solution: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean
    public String greeting() {
        return "Hello bean";
    }
}`,
        hints: [
          'Над классом: @Configuration',
          'Над методом: @Bean',
          'return "Hello bean";'
        ],
        checks: [
          { type: 'contains', value: '@Configuration', message: 'Класс помечен @Configuration' },
          { type: 'contains', value: '@Bean', message: 'Метод помечен @Bean' },
          { type: 'contains', value: 'Hello bean', message: 'Бин возвращает нужное значение' }
        ]
      },
      {
        id: 'sb-9',
        title: 'Валидация данных',
        difficulty: 'Среднее',
        theory:
          'Bean Validation проверяет входные данные: `@NotBlank` (не пустая строка), `@Size(min/max)`, `@Min`. В контроллере добавь `@Valid` перед телом запроса, чтобы запустить проверку.',
        task: 'В DTO `UserDto` пометь поле `name` как `@NotBlank` и `@Size(min = 2)`. В контроллере прими тело с `@Valid @RequestBody`.',
        starter: `import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.web.bind.annotation.*;

class UserDto {
    // name: не пустое и минимум 2 символа
    public String name;
}

@RestController
public class UserController {

    @PostMapping("/users")
    public String create(/* провалидируй тело */ UserDto dto) {
        return "ok";
    }
}`,
        solution: `import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.web.bind.annotation.*;

class UserDto {
    @NotBlank
    @Size(min = 2)
    public String name;
}

@RestController
public class UserController {

    @PostMapping("/users")
    public String create(@Valid @RequestBody UserDto dto) {
        return "ok";
    }
}`,
        hints: [
          'Над полем name: @NotBlank и @Size(min = 2)',
          'В контроллере: @Valid @RequestBody UserDto dto'
        ],
        checks: [
          { type: 'contains', value: '@NotBlank', message: 'Поле помечено @NotBlank' },
          { type: 'contains', value: '@Size', message: 'Ограничение длины через @Size' },
          { type: 'contains', value: '@Valid', message: 'Тело валидируется через @Valid' },
          { type: 'contains', value: '@RequestBody', message: 'Тело читается через @RequestBody' }
        ]
      },
      {
        id: 'sb-10',
        title: 'Глобальная обработка ошибок',
        difficulty: 'Среднее',
        theory:
          '`@RestControllerAdvice` ловит исключения всех контроллеров централизованно. Метод с `@ExceptionHandler(X.class)` обрабатывает конкретный тип исключения и формирует ответ.',
        task: 'Создай класс `@RestControllerAdvice` с методом `@ExceptionHandler(NotFoundException.class)`, возвращающим `ResponseEntity` со статусом 404.',
        starter: `import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

// глобальный обработчик ошибок
public class GlobalHandler {
    // поймай NotFoundException и верни 404
}

class NotFoundException extends RuntimeException {}`,
        solution: `import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class GlobalHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<String> handle(NotFoundException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Не найдено");
    }
}

class NotFoundException extends RuntimeException {}`,
        hints: [
          'Над классом: @RestControllerAdvice',
          'Над методом: @ExceptionHandler(NotFoundException.class)',
          'Вернуть: ResponseEntity.status(HttpStatus.NOT_FOUND).body(...)'
        ],
        checks: [
          { type: 'contains', value: '@RestControllerAdvice', message: 'Класс помечен @RestControllerAdvice' },
          { type: 'contains', value: '@ExceptionHandler', message: 'Есть @ExceptionHandler' },
          { type: 'contains', value: 'NotFoundException', message: 'Обрабатывается NotFoundException' },
          { type: 'contains', value: 'HttpStatus.NOT_FOUND', message: 'Возвращается статус 404' }
        ]
      },
      {
        id: 'sb-11',
        title: 'DTO и маппинг',
        difficulty: 'Среднее',
        theory:
          'DTO (Data Transfer Object) отделяет внешнее API от сущностей БД. Преобразование «сущность → DTO» выносят в отдельный метод-маппер.',
        task: 'В классе `UserMapper` напиши метод `toDto(User user)`, возвращающий `UserDto` со скопированным полем `name`.',
        starter: `class User {
    String name;
}

class UserDto {
    String name;
}

public class UserMapper {
    // toDto(User) -> UserDto
}`,
        solution: `class User {
    String name;
}

class UserDto {
    String name;
}

public class UserMapper {
    public UserDto toDto(User user) {
        UserDto dto = new UserDto();
        dto.name = user.name;
        return dto;
    }
}`,
        hints: [
          'Сигнатура: public UserDto toDto(User user)',
          'Создай new UserDto(), скопируй name, верни dto'
        ],
        checks: [
          { type: 'regex', value: 'UserDto\\s+toDto\\s*\\(\\s*User', message: 'Метод toDto(User) объявлен' },
          { type: 'contains', value: 'new UserDto', message: 'Создаётся новый UserDto' },
          { type: 'contains', value: 'return', message: 'DTO возвращается' }
        ]
      },
      {
        id: 'sb-12',
        title: 'Свойства и @Value',
        difficulty: 'Лёгкое',
        theory:
          'Значения из `application.properties` внедряются через `@Value("${ключ}")`. Значение по умолчанию задаётся после двоеточия: `${ключ:по_умолчанию}`.',
        task: 'Внедри свойство `app.name` (со значением по умолчанию `Demo`) в поле `appName`.',
        starter: `import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AppInfo {
    // @Value: app.name, по умолчанию "Demo"
    private String appName;
}`,
        solution: `import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class AppInfo {
    @Value("\${app.name:Demo}")
    private String appName;
}`,
        hints: [
          'Над полем: @Value("\${app.name:Demo}")',
          'Часть после двоеточия — значение по умолчанию'
        ],
        checks: [
          { type: 'contains', value: '@Value', message: 'Используется @Value' },
          { type: 'contains', value: 'app.name', message: 'Внедряется свойство app.name' },
          { type: 'contains', value: 'Demo', message: 'Задано значение по умолчанию Demo' }
        ]
      },
      {
        id: 'sb-13',
        title: 'PUT и DELETE',
        difficulty: 'Лёгкое',
        theory:
          'REST использует разные HTTP-методы: `@PutMapping` — обновление, `@DeleteMapping` — удаление. Обычно с идентификатором в пути `/{id}`.',
        task: 'В `ItemController` добавь метод `update` на `PUT /items/{id}` и метод `delete` на `DELETE /items/{id}` (id через `@PathVariable`).',
        starter: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/items")
public class ItemController {

    // PUT /items/{id}

    // DELETE /items/{id}
}`,
        solution: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/items")
public class ItemController {

    @PutMapping("/{id}")
    public String update(@PathVariable Long id) {
        return "updated " + id;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
    }
}`,
        hints: [
          'Обновление: @PutMapping("/{id}")',
          'Удаление: @DeleteMapping("/{id}")',
          'id берётся через @PathVariable Long id'
        ],
        checks: [
          { type: 'contains', value: '@PutMapping', message: 'Есть @PutMapping' },
          { type: 'contains', value: '@DeleteMapping', message: 'Есть @DeleteMapping' },
          { type: 'contains', value: '@PathVariable', message: 'id берётся через @PathVariable' }
        ]
      },
      {
        id: 'sb-14',
        title: 'Пагинация',
        difficulty: 'Среднее',
        theory:
          'Чтобы не отдавать тысячи записей сразу, используют постраничную выдачу. Метод `findAll(Pageable)` возвращает `Page<T>` — страницу с данными и метаинформацией.',
        task: 'В `ProductService` добавь метод `page(Pageable pageable)`, возвращающий `Page<Product>` через `repository.findAll(pageable)`.',
        starter: `import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    // page(Pageable) -> Page<Product>
}`,
        solution: `import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Page<Product> page(Pageable pageable) {
        return repository.findAll(pageable);
    }
}`,
        hints: [
          'Тип возврата: Page<Product>',
          'Параметр: Pageable pageable',
          'Тело: return repository.findAll(pageable);'
        ],
        checks: [
          { type: 'regex', value: 'Page\\s*<\\s*Product\\s*>', message: 'Метод возвращает Page<Product>' },
          { type: 'contains', value: 'Pageable', message: 'Принимается Pageable' },
          { type: 'contains', value: 'findAll(pageable)', message: 'Вызван findAll(pageable)' }
        ]
      }
    ]
  },
  {
    id: 'hibernate',
    title: 'Hibernate / JPA',
    subtitle: 'Работа с БД',
    icon: 'Database',
    color: '#38bdf8',
    tasks: [
      {
        id: 'hb-1',
        title: 'Сущность (Entity)',
        difficulty: 'Лёгкое',
        theory:
          '`@Entity` превращает класс в таблицу БД. `@Id` отмечает первичный ключ, `@GeneratedValue` — автогенерацию значения. `@Column` настраивает столбец.',
        task: 'Создай сущность `Product` с полем `id` (`@Id`, автогенерация) и полем `name` (String).',
        starter: `import jakarta.persistence.*;

// сделай класс сущностью
public class Product {
    // id — первичный ключ с автогенерацией

    private String name;
}`,
        solution: `import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
}`,
        hints: [
          'Над классом: @Entity',
          'Над полем id: @Id и @GeneratedValue(strategy = GenerationType.IDENTITY)',
          'Тип id обычно Long'
        ],
        checks: [
          { type: 'contains', value: '@Entity', message: 'Класс помечен @Entity' },
          { type: 'contains', value: '@Id', message: 'Есть первичный ключ @Id' },
          { type: 'contains', value: '@GeneratedValue', message: 'Настроена автогенерация @GeneratedValue' },
          { type: 'regex', value: '(Long|long|Integer|int)\\s+id', message: 'Объявлено поле id' }
        ]
      },
      {
        id: 'hb-2',
        title: 'Репозиторий',
        difficulty: 'Лёгкое',
        theory:
          'Spring Data JPA сам реализует доступ к данным. Достаточно объявить интерфейс, наследующий `JpaRepository<Сущность, ТипКлюча>` — методы save/findAll/findById/delete появятся автоматически.',
        task: 'Создай интерфейс `ProductRepository`, наследующий `JpaRepository` для сущности `Product` с ключом `Long`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;

// объяви интерфейс репозитория для Product
`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}`,
        hints: [
          'Это interface, а не class',
          'extends JpaRepository<Product, Long>'
        ],
        checks: [
          { type: 'regex', value: 'interface\\s+ProductRepository', message: 'Объявлен интерфейс ProductRepository' },
          { type: 'regex', value: 'extends\\s+JpaRepository', message: 'Наследуется от JpaRepository' },
          { type: 'regex', value: 'JpaRepository\\s*<\\s*Product\\s*,\\s*Long\\s*>', message: 'Указаны Product и Long' }
        ]
      },
      {
        id: 'hb-3',
        title: 'Связь One-to-Many',
        difficulty: 'Среднее',
        theory:
          'Связи между таблицами: `@OneToMany` (один-ко-многим) на стороне «один» и `@ManyToOne` на стороне «многие». Параметр `mappedBy` указывает поле-владельца связи.',
        task: 'У `Order` есть список `items` (`@OneToMany(mappedBy = "order")`). У `Item` есть поле `order` (`@ManyToOne`).',
        starter: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    // список позиций заказа (один-ко-многим)
}

@Entity
class Item {
    @Id @GeneratedValue
    private Long id;

    // ссылка на заказ (многие-к-одному)
}`,
        solution: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    @OneToMany(mappedBy = "order")
    private List<Item> items;
}

@Entity
class Item {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne
    private Order order;
}`,
        hints: [
          'Сторона «один»: @OneToMany(mappedBy = "order") над List<Item> items',
          'Сторона «многие»: @ManyToOne над полем Order order'
        ],
        checks: [
          { type: 'contains', value: '@OneToMany', message: 'Есть связь @OneToMany' },
          { type: 'contains', value: 'mappedBy', message: 'Указан mappedBy' },
          { type: 'contains', value: '@ManyToOne', message: 'Есть обратная связь @ManyToOne' },
          { type: 'regex', value: 'List\\s*<\\s*Item\\s*>', message: 'Коллекция позиций List<Item>' }
        ]
      },
      {
        id: 'hb-4',
        title: 'Запросы в репозитории',
        difficulty: 'Среднее',
        theory:
          'Spring Data понимает имена методов: `findByName(String name)` сгенерирует запрос автоматически. Для сложных случаев используют `@Query` с JPQL.',
        task: 'В `ProductRepository` добавь производный метод `findByName(String name)` и метод с аннотацией `@Query`, возвращающий все товары дороже заданной цены.',
        starter: `import org.springframework.data.jpa.repository.*;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    // производный метод поиска по имени

    // @Query: товары дороже price
}`,
        solution: `import org.springframework.data.jpa.repository.*;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByName(String name);

    @Query("SELECT p FROM Product p WHERE p.price > :price")
    List<Product> findExpensive(double price);
}`,
        hints: [
          'Производный метод: List<Product> findByName(String name);',
          'JPQL пишется в @Query("SELECT p FROM Product p WHERE p.price > :price")',
          'Параметр :price связывается с аргументом метода'
        ],
        checks: [
          { type: 'regex', value: 'findByName\\s*\\(\\s*String', message: 'Есть производный метод findByName' },
          { type: 'contains', value: '@Query', message: 'Используется аннотация @Query' },
          { type: 'regex', value: 'SELECT', message: 'В @Query есть JPQL-запрос' },
          { type: 'contains', value: ':price', message: 'Используется именованный параметр :price' }
        ]
      },
      {
        id: 'hb-5',
        title: 'Сервис с CRUD (итог)',
        difficulty: 'Среднее',
        theory:
          'Итоговая сборка: `@Service` использует репозиторий для операций CRUD. `save()` создаёт/обновляет, `findById()` ищет, `deleteById()` удаляет. Зависимость внедряем через конструктор.',
        task: 'Создай `ProductService` (`@Service`), внедри `ProductRepository` через конструктор и реализуй методы: `create(Product)` через `save`, `get(Long id)` через `findById(...).orElse(null)`, `remove(Long id)` через `deleteById`.',
        starter: `import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepository repository;

    // конструктор с внедрением репозитория

    // create / get / remove
}`,
        solution: `import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Product create(Product product) {
        return repository.save(product);
    }

    public Product get(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void remove(Long id) {
        repository.deleteById(id);
    }
}`,
        hints: [
          'Конструктор: public ProductService(ProductRepository repository) { this.repository = repository; }',
          'create → repository.save(product)',
          'get → repository.findById(id).orElse(null)',
          'remove → repository.deleteById(id)'
        ],
        checks: [
          { type: 'contains', value: '@Service', message: 'Класс помечен @Service' },
          { type: 'regex', value: 'public\\s+ProductService\\s*\\(\\s*ProductRepository', message: 'Репозиторий внедрён через конструктор' },
          { type: 'contains', value: 'repository.save(', message: 'create использует save()' },
          { type: 'contains', value: 'findById(', message: 'get использует findById()' },
          { type: 'contains', value: 'deleteById(', message: 'remove использует deleteById()' }
        ]
      },
      {
        id: 'hb-6',
        title: 'Ограничения столбцов',
        difficulty: 'Лёгкое',
        theory:
          'Аннотация `@Column` настраивает столбец: `nullable = false` делает поле обязательным, `unique = true` — уникальным, `length` задаёт длину.',
        task: 'В сущности `Account` сделай поле `email` обязательным и уникальным с помощью `@Column`.',
        starter: `import jakarta.persistence.*;

@Entity
public class Account {
    @Id @GeneratedValue
    private Long id;

    // email: обязательный и уникальный
    private String email;
}`,
        solution: `import jakarta.persistence.*;

@Entity
public class Account {
    @Id @GeneratedValue
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;
}`,
        hints: [
          'Над полем email: @Column(...)',
          'Обязательность: nullable = false',
          'Уникальность: unique = true'
        ],
        checks: [
          { type: 'contains', value: '@Column', message: 'Используется @Column' },
          { type: 'contains', value: 'nullable = false', message: 'Поле обязательное (nullable = false)' },
          { type: 'contains', value: 'unique = true', message: 'Поле уникальное (unique = true)' }
        ]
      },
      {
        id: 'hb-7',
        title: 'Связь Many-to-Many',
        difficulty: 'Среднее',
        theory:
          'Связь многие-ко-многим (`@ManyToMany`) хранится в отдельной таблице связей. Например, у студента много курсов, а у курса — много студентов.',
        task: 'У сущности `Student` добавь поле `courses` — список `Course` со связью `@ManyToMany`.',
        starter: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Student {
    @Id @GeneratedValue
    private Long id;

    // many-to-many: список курсов
}

@Entity
class Course {
    @Id @GeneratedValue
    private Long id;
}`,
        solution: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Student {
    @Id @GeneratedValue
    private Long id;

    @ManyToMany
    private List<Course> courses;
}

@Entity
class Course {
    @Id @GeneratedValue
    private Long id;
}`,
        hints: [
          'Над полем: @ManyToMany',
          'Поле: private List<Course> courses;'
        ],
        checks: [
          { type: 'contains', value: '@ManyToMany', message: 'Используется @ManyToMany' },
          { type: 'regex', value: 'List\\s*<\\s*Course\\s*>', message: 'Объявлен список курсов List<Course>' }
        ]
      },
      {
        id: 'hb-8',
        title: 'Транзакции',
        difficulty: 'Среднее',
        theory:
          '`@Transactional` оборачивает метод в транзакцию: все изменения в БД фиксируются вместе, а при исключении — откатываются. Ставится на методы сервиса.',
        task: 'Пометь метод `transfer` сервиса `BankService` аннотацией `@Transactional`.',
        starter: `import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BankService {

    // сделай метод транзакционным
    public void transfer(Long from, Long to, int amount) {
        // списание и зачисление средств
    }
}`,
        solution: `import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BankService {

    @Transactional
    public void transfer(Long from, Long to, int amount) {
        // списание и зачисление средств
    }
}`,
        hints: [
          'Над методом transfer поставь @Transactional',
          'Импорт: org.springframework.transaction.annotation.Transactional'
        ],
        checks: [
          { type: 'contains', value: '@Transactional', message: 'Метод помечен @Transactional' },
          { type: 'regex', value: 'void\\s+transfer\\s*\\(', message: 'Метод transfer на месте' }
        ]
      },
      {
        id: 'hb-9',
        title: 'Fetch-типы и проблема N+1',
        difficulty: 'Среднее',
        theory:
          'По умолчанию `@ManyToOne` грузится **EAGER** (сразу), а коллекции — **LAZY** (по требованию). Лишние EAGER-связи и обращения к LAZY в цикле порождают проблему **N+1 запросов**. Управляй этим через `fetch = FetchType.LAZY`.',
        task: 'Сделай связь `@ManyToOne` с заказом ленивой: добавь `fetch = FetchType.LAZY`.',
        starter: `import jakarta.persistence.*;

@Entity
public class Item {
    @Id @GeneratedValue
    private Long id;

    // ленивая связь с заказом
    private Order order;
}

@Entity
class Order {
    @Id @GeneratedValue
    private Long id;
}`,
        solution: `import jakarta.persistence.*;

@Entity
public class Item {
    @Id @GeneratedValue
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Order order;
}

@Entity
class Order {
    @Id @GeneratedValue
    private Long id;
}`,
        hints: [
          'Над полем order: @ManyToOne(fetch = FetchType.LAZY)',
          'LAZY — связь подгрузится только при первом обращении'
        ],
        checks: [
          { type: 'contains', value: '@ManyToOne', message: 'Есть связь @ManyToOne' },
          { type: 'contains', value: 'FetchType.LAZY', message: 'Связь сделана ленивой (LAZY)' }
        ]
      },
      {
        id: 'hb-10',
        title: 'Каскады и orphanRemoval',
        difficulty: 'Среднее',
        theory:
          '`cascade = CascadeType.ALL` распространяет операции (save/delete) на дочерние сущности. `orphanRemoval = true` удаляет элемент из БД, когда его убрали из коллекции.',
        task: 'У `Order` коллекция `items` должна иметь `@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)`.',
        starter: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    // каскад всех операций + удаление сирот
    private List<Item> items;
}

@Entity
class Item {
    @Id @GeneratedValue
    private Long id;
}`,
        solution: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Item> items;
}

@Entity
class Item {
    @Id @GeneratedValue
    private Long id;
}`,
        hints: [
          'Над items: @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)',
          'orphanRemoval удаляет «осиротевшие» элементы'
        ],
        checks: [
          { type: 'contains', value: '@OneToMany', message: 'Есть связь @OneToMany' },
          { type: 'contains', value: 'CascadeType.ALL', message: 'Настроен каскад CascadeType.ALL' },
          { type: 'contains', value: 'orphanRemoval = true', message: 'Включён orphanRemoval' }
        ]
      },
      {
        id: 'hb-11',
        title: 'Связь One-to-One',
        difficulty: 'Лёгкое',
        theory:
          'Связь один-к-одному (`@OneToOne`) соединяет две сущности, например `User` и его `Profile`.',
        task: 'У сущности `User` добавь поле `profile` типа `Profile` со связью `@OneToOne`.',
        starter: `import jakarta.persistence.*;

@Entity
public class User {
    @Id @GeneratedValue
    private Long id;

    // связь один-к-одному с профилем
}

@Entity
class Profile {
    @Id @GeneratedValue
    private Long id;
}`,
        solution: `import jakarta.persistence.*;

@Entity
public class User {
    @Id @GeneratedValue
    private Long id;

    @OneToOne
    private Profile profile;
}

@Entity
class Profile {
    @Id @GeneratedValue
    private Long id;
}`,
        hints: [
          'Над полем: @OneToOne',
          'Поле: private Profile profile;'
        ],
        checks: [
          { type: 'contains', value: '@OneToOne', message: 'Используется @OneToOne' },
          { type: 'regex', value: 'Profile\\s+profile', message: 'Объявлено поле profile' }
        ]
      },
      {
        id: 'hb-12',
        title: 'Проекции (DTO из запроса)',
        difficulty: 'Среднее',
        theory:
          'Чтобы не грузить всю сущность, репозиторий может возвращать **проекцию** — интерфейс с геттерами только нужных полей. Spring Data сам подставит реализацию.',
        task: 'Объяви интерфейс-проекцию `NameOnly` с методом `getName()` и метод репозитория `findAllProjectedBy()`, возвращающий `List<NameOnly>`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

interface NameOnly {
    // getName()
}

public interface ProductRepository extends JpaRepository<Product, Long> {
    // метод, возвращающий список проекций
}`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

interface NameOnly {
    String getName();
}

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<NameOnly> findAllProjectedBy();
}`,
        hints: [
          'Проекция — это интерфейс с геттером: String getName();',
          'Метод: List<NameOnly> findAllProjectedBy();'
        ],
        checks: [
          { type: 'regex', value: 'interface\\s+NameOnly', message: 'Объявлена проекция NameOnly' },
          { type: 'regex', value: 'getName\\s*\\(', message: 'Есть геттер getName()' },
          { type: 'regex', value: 'List\\s*<\\s*NameOnly\\s*>', message: 'Метод возвращает List<NameOnly>' }
        ]
      },
      {
        id: 'hb-13',
        title: 'Поиск и сортировка по имени метода',
        difficulty: 'Среднее',
        theory:
          'Spring Data строит запрос по имени метода: `Containing` — поиск подстроки, `IgnoreCase` — без учёта регистра, `OrderBy...Desc` — сортировка по убыванию.',
        task: 'Добавь в `ProductRepository` метод `findByNameContainingIgnoreCaseOrderByIdDesc(String part)`, возвращающий `List<Product>`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // поиск по части имени без учёта регистра, сортировка по id убыв.
}`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCaseOrderByIdDesc(String part);
}`,
        hints: [
          'Containing — поиск подстроки',
          'IgnoreCase — без учёта регистра',
          'OrderByIdDesc — сортировка по id по убыванию'
        ],
        checks: [
          { type: 'contains', value: 'findByNameContaining', message: 'Поиск по части имени (Containing)' },
          { type: 'contains', value: 'IgnoreCase', message: 'Без учёта регистра (IgnoreCase)' },
          { type: 'contains', value: 'OrderById', message: 'Сортировка по id (OrderBy)' }
        ]
      }
    ]
  },
  {
    id: 'capstone',
    title: 'Проект: Notes API',
    subtitle: 'Собираем всё вместе',
    icon: 'Rocket',
    color: '#a855f7',
    isProject: true,
    tasks: [
      {
        id: 'cap-1',
        title: 'Шаг 1. Сущность Note',
        difficulty: 'Лёгкое',
        theory:
          'Собираем настоящее REST-приложение — **API заметок**. Слои: сущность → репозиторий → сервис → контроллер. Начнём с сущности `Note` — это таблица в БД.\n\nЗависимости проекта (Maven): `spring-boot-starter-web`, `spring-boot-starter-data-jpa`, `spring-boot-starter-validation`, `h2`.',
        task: 'Создай сущность `Note` с полями: `id` (Long, `@Id` + автогенерация), `title` (String), `content` (String), `done` (boolean).',
        starter: `import jakarta.persistence.*;

// сделай Note сущностью с полями id, title, content, done
public class Note {
}`,
        solution: `import jakarta.persistence.*;

@Entity
public class Note {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String content;
    private boolean done;
}`,
        hints: [
          'Над классом: @Entity',
          'id: @Id @GeneratedValue(strategy = GenerationType.IDENTITY)',
          'Добавь поля title, content (String) и done (boolean)'
        ],
        checks: [
          { type: 'contains', value: '@Entity', message: 'Класс помечен @Entity' },
          { type: 'contains', value: '@Id', message: 'Есть первичный ключ @Id' },
          { type: 'contains', value: '@GeneratedValue', message: 'Настроена автогенерация' },
          { type: 'regex', value: 'String\\s+title', message: 'Есть поле title' },
          { type: 'regex', value: 'boolean\\s+done', message: 'Есть поле done' }
        ]
      },
      {
        id: 'cap-2',
        title: 'Шаг 2. Репозиторий',
        difficulty: 'Лёгкое',
        theory:
          'Доступ к данным — через `JpaRepository`. Помимо готовых CRUD-методов добавим производный метод поиска по статусу.',
        task: 'Создай интерфейс `NoteRepository extends JpaRepository<Note, Long>` и добавь метод `findByDone(boolean done)`, возвращающий `List<Note>`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

// репозиторий для Note
`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByDone(boolean done);
}`,
        hints: [
          'Это interface: public interface NoteRepository extends JpaRepository<Note, Long>',
          'Производный метод: List<Note> findByDone(boolean done);'
        ],
        checks: [
          { type: 'regex', value: 'interface\\s+NoteRepository', message: 'Объявлен интерфейс NoteRepository' },
          { type: 'regex', value: 'JpaRepository\\s*<\\s*Note\\s*,\\s*Long\\s*>', message: 'Наследует JpaRepository<Note, Long>' },
          { type: 'contains', value: 'findByDone', message: 'Есть метод поиска по статусу' }
        ]
      },
      {
        id: 'cap-3',
        title: 'Шаг 3. Исключение 404',
        difficulty: 'Лёгкое',
        theory:
          'Если заметку не нашли — вернём клиенту 404. Заведём собственное исключение с `@ResponseStatus`.',
        task: 'Создай `NoteNotFoundException extends RuntimeException` и пометь его `@ResponseStatus(HttpStatus.NOT_FOUND)`.',
        starter: `import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// исключение «заметка не найдена» с кодом 404
public class NoteNotFoundException extends RuntimeException {
}`,
        solution: `import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NoteNotFoundException extends RuntimeException {
}`,
        hints: [
          'Над классом: @ResponseStatus(HttpStatus.NOT_FOUND)',
          'Исключение наследует RuntimeException'
        ],
        checks: [
          { type: 'contains', value: '@ResponseStatus', message: 'Используется @ResponseStatus' },
          { type: 'contains', value: 'HttpStatus.NOT_FOUND', message: 'Код 404' },
          { type: 'regex', value: 'extends\\s+RuntimeException', message: 'Наследует RuntimeException' }
        ]
      },
      {
        id: 'cap-4',
        title: 'Шаг 4. DTO с валидацией',
        difficulty: 'Среднее',
        theory:
          'Входные данные принимаем через DTO и валидируем. Заголовок обязателен.',
        task: 'Создай `NoteDto` с полем `title` (`@NotBlank`) и полем `content` (String).',
        starter: `import jakarta.validation.constraints.NotBlank;

// DTO для создания заметки
public class NoteDto {
}`,
        solution: `import jakarta.validation.constraints.NotBlank;

public class NoteDto {
    @NotBlank
    public String title;
    public String content;
}`,
        hints: [
          'Над полем title: @NotBlank',
          'Добавь также поле content (String)'
        ],
        checks: [
          { type: 'contains', value: 'class NoteDto', message: 'Объявлен класс NoteDto' },
          { type: 'contains', value: '@NotBlank', message: 'title помечен @NotBlank' },
          { type: 'regex', value: 'String\\s+title', message: 'Есть поле title' },
          { type: 'regex', value: 'String\\s+content', message: 'Есть поле content' }
        ]
      },
      {
        id: 'cap-5',
        title: 'Шаг 5. Сервис (CRUD)',
        difficulty: 'Среднее',
        theory:
          'Бизнес-логика — в `@Service`. Репозиторий внедряем через конструктор. При отсутствии заметки бросаем исключение из шага 3.',
        task: 'Создай `NoteService` (`@Service`) с внедрённым `NoteRepository`. Методы: `all()` → `findAll()`, `get(Long id)` → `findById(id).orElseThrow(NoteNotFoundException::new)`, `create(Note note)` → `save(note)`, `delete(Long id)` → `deleteById(id)`.',
        starter: `import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {
    private final NoteRepository repository;

    // конструктор + методы all / get / create / delete
}`,
        solution: `import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class NoteService {
    private final NoteRepository repository;

    public NoteService(NoteRepository repository) {
        this.repository = repository;
    }

    public List<Note> all() {
        return repository.findAll();
    }

    public Note get(Long id) {
        return repository.findById(id).orElseThrow(NoteNotFoundException::new);
    }

    public Note create(Note note) {
        return repository.save(note);
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }
}`,
        hints: [
          'Конструктор: public NoteService(NoteRepository repository) { this.repository = repository; }',
          'get: repository.findById(id).orElseThrow(NoteNotFoundException::new)',
          'create → save(note), delete → deleteById(id)'
        ],
        checks: [
          { type: 'contains', value: '@Service', message: 'Класс помечен @Service' },
          { type: 'regex', value: 'public\\s+NoteService\\s*\\(\\s*NoteRepository', message: 'Репозиторий внедрён через конструктор' },
          { type: 'contains', value: 'findAll(', message: 'all() использует findAll' },
          { type: 'contains', value: 'orElseThrow', message: 'get() бросает исключение при отсутствии' },
          { type: 'contains', value: 'save(', message: 'create() использует save' },
          { type: 'contains', value: 'deleteById(', message: 'delete() использует deleteById' }
        ]
      },
      {
        id: 'cap-6',
        title: 'Шаг 6. REST-контроллер',
        difficulty: 'Среднее',
        theory:
          'Контроллер связывает HTTP-запросы с сервисом. Базовый путь — `/api/notes`. Тело POST валидируем через `@Valid`.',
        task: 'Создай `NoteController` (`@RestController`, `@RequestMapping("/api/notes")`): `GET` список, `GET /{id}`, `POST` с `@Valid @RequestBody`, `DELETE /{id}`.',
        starter: `import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    private final NoteService service;

    public NoteController(NoteService service) {
        this.service = service;
    }

    // GET /api/notes, GET /{id}, POST, DELETE /{id}
}`,
        solution: `import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {
    private final NoteService service;

    public NoteController(NoteService service) {
        this.service = service;
    }

    @GetMapping
    public List<Note> all() {
        return service.all();
    }

    @GetMapping("/{id}")
    public Note get(@PathVariable Long id) {
        return service.get(id);
    }

    @PostMapping
    public Note create(@Valid @RequestBody Note note) {
        return service.create(note);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}`,
        hints: [
          'Список: @GetMapping → service.all()',
          'Одна заметка: @GetMapping("/{id}") + @PathVariable Long id',
          'Создание: @PostMapping + @Valid @RequestBody Note note',
          'Удаление: @DeleteMapping("/{id}")'
        ],
        checks: [
          { type: 'contains', value: '@RestController', message: 'Класс помечен @RestController' },
          { type: 'contains', value: '/api/notes', message: 'Базовый путь /api/notes' },
          { type: 'contains', value: '@GetMapping', message: 'Есть GET-методы' },
          { type: 'contains', value: '@PostMapping', message: 'Есть POST-метод' },
          { type: 'contains', value: '@DeleteMapping', message: 'Есть DELETE-метод' },
          { type: 'contains', value: '@PathVariable', message: 'id берётся через @PathVariable' }
        ]
      },
      {
        id: 'cap-7',
        title: 'Шаг 7. Конфигурация и запуск',
        difficulty: 'Лёгкое',
        theory:
          'Последний штрих — `application.properties` с встроенной БД H2 (в памяти). После этого приложение запускается командой `mvn spring-boot:run`, а API доступно на `http://localhost:8080/api/notes`.',
        task: 'Заполни `application.properties`: URL `jdbc:h2:mem:notes` для `spring.datasource.url` и `update` для `spring.jpa.hibernate.ddl-auto`.',
        starter: `# application.properties — настрой встроенную БД H2
spring.datasource.url=
spring.jpa.hibernate.ddl-auto=
`,
        solution: `# application.properties — встроенная БД H2 (в памяти)
spring.datasource.url=jdbc:h2:mem:notes
spring.datasource.driverClassName=org.h2.Driver
spring.jpa.hibernate.ddl-auto=update
spring.h2.console.enabled=true`,
        hints: [
          'URL базы в памяти: jdbc:h2:mem:notes',
          'Авто-обновление схемы: spring.jpa.hibernate.ddl-auto=update'
        ],
        checks: [
          { type: 'contains', value: 'spring.datasource.url', message: 'Указан URL источника данных' },
          { type: 'contains', value: 'jdbc:h2:mem', message: 'Используется H2 в памяти' },
          { type: 'contains', value: 'ddl-auto=update', message: 'Схема обновляется (ddl-auto=update)' }
        ]
      }
    ]
  }
]

// Плоский список всех заданий + удобные индексы
export const allTasks = modules.flatMap((m) =>
  m.tasks.map((t) => ({ ...t, moduleId: m.id, moduleTitle: m.title, moduleColor: m.color }))
)

export function totalTaskCount() {
  return allTasks.length
}
