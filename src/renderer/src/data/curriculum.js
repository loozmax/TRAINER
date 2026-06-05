// Учебный план тренажёра. Сгруппирован по темам (≥5 практических задач на тему).
// Каждое задание: теория (кратко), задача, заготовка, решение, подсказки, проверки, (опц.) run.
// Поле area группирует темы по областям в боковой панели.

export const modules = [
  // ───────────────────────────── JAVA ─────────────────────────────
  {
    id: 'java-basics',
    area: 'Java',
    title: 'Синтаксис и методы',
    subtitle: 'С чего начать',
    icon: 'Coffee',
    color: '#f59e0b',
    tasks: [
      {
        id: 'b1',
        title: 'Первая программа',
        difficulty: 'Лёгкое',
        theory:
          'Любая Java-программа начинается с **класса**. Точка входа — метод `public static void main(String[] args)`. Вывод в консоль — `System.out.println(...)`.',
        task: 'Создай класс `Main` с методом `main`, который выводит `Hello, Java!`.',
        starter: `public class Main {
    public static void main(String[] args) {
        // выведи строку здесь
    }
}`,
        solution: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}`,
        run: { expected: 'Hello, Java!' },
        hints: ['Вывод: System.out.println(...)', 'Строка в двойных кавычках: "Hello, Java!"'],
        checks: [
          { type: 'contains', value: 'class Main', message: 'Объявлен класс Main' },
          { type: 'regex', value: 'static\\s+void\\s+main', message: 'Есть метод main' },
          { type: 'contains', value: 'Hello, Java!', message: 'Выводится нужная строка' }
        ]
      },
      {
        id: 'b2',
        title: 'Переменные и типы',
        difficulty: 'Лёгкое',
        theory:
          'Java статически типизирована. Основные типы: `int`, `double`, `boolean`, `String`. Объявление: `тип имя = значение;`. Строки склеиваются оператором `+`.',
        task: 'Заведи `int age = 25` и `String name = "Anna"`, выведи их одной строкой в формате `Anna 25`.',
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
        hints: ['int age = 25;', 'Склейка строк: name + " " + age'],
        checks: [
          { type: 'regex', value: 'int\\s+age\\s*=\\s*25', message: 'Объявлена int age = 25' },
          { type: 'regex', value: 'String\\s+name\\s*=', message: 'Объявлена String name' },
          { type: 'contains', value: 'Anna', message: 'Значение имени — Anna' }
        ]
      },
      {
        id: 'b3',
        title: 'Условия if/else',
        difficulty: 'Лёгкое',
        theory:
          '`if (условие) { ... } else { ... }` выбирает ветку выполнения. Метод может вернуть разный результат в зависимости от проверки.',
        task: 'Метод `access(int age)` возвращает `"allowed"`, если `age >= 18`, иначе `"denied"`. Выведи `access(20)` (ожидается `allowed`).',
        starter: `public class Main {
    static String access(int age) {
        // верни allowed или denied
    }

    public static void main(String[] args) {
        System.out.println(access(20));
    }
}`,
        solution: `public class Main {
    static String access(int age) {
        if (age >= 18) {
            return "allowed";
        }
        return "denied";
    }

    public static void main(String[] args) {
        System.out.println(access(20));
    }
}`,
        run: { expected: 'allowed' },
        hints: ['Проверка: if (age >= 18)', 'Верни "allowed" или "denied"'],
        checks: [
          { type: 'regex', value: 'if\\s*\\(', message: 'Используется if' },
          { type: 'regex', value: 'age\\s*>=\\s*18', message: 'Проверка возраста' },
          { type: 'contains', value: 'allowed', message: 'Возвращается allowed' },
          { type: 'contains', value: 'denied', message: 'Возвращается denied' }
        ]
      },
      {
        id: 'b4',
        title: 'Методы: цена со скидкой',
        difficulty: 'Лёгкое',
        theory:
          'Метод — переиспользуемый блок логики: `модификатор тип имя(параметры)`. Повторяющиеся вычисления выносят в методы.',
        task: 'Метод `priceWithDiscount(int price, int percent)` возвращает цену после скидки. Выведи `priceWithDiscount(1000, 20)` (ожидается `800`).',
        starter: `public class Main {
    // метод расчёта цены со скидкой

    public static void main(String[] args) {
        System.out.println(priceWithDiscount(1000, 20)); // 800
    }
}`,
        solution: `public class Main {
    static int priceWithDiscount(int price, int percent) {
        return price - price * percent / 100;
    }

    public static void main(String[] args) {
        System.out.println(priceWithDiscount(1000, 20));
    }
}`,
        run: { expected: '800' },
        hints: ['Скидка в деньгах: price * percent / 100', 'Итог: price - price * percent / 100'],
        checks: [
          { type: 'regex', value: 'int\\s+priceWithDiscount\\s*\\(', message: 'Объявлен метод priceWithDiscount' },
          { type: 'contains', value: 'return', message: 'Метод возвращает результат' },
          { type: 'contains', value: 'percent', message: 'Используется процент скидки' }
        ]
      },
      {
        id: 'b5',
        title: 'Циклы: подсчёт на складе',
        difficulty: 'Лёгкое',
        theory:
          'Цикл `for` перебирает элементы, `if` внутри проверяет условие. Частая задача — пройти по данным и что-то посчитать.',
        task: 'Метод `inStockCount(int[] quantities)` возвращает, сколько позиций в наличии (количество > 0). Для `{5, 0, 3, 0, 8}` ожидается `3`.',
        starter: `public class Main {
    static int inStockCount(int[] quantities) {
        // посчитай позиции с количеством > 0
    }

    public static void main(String[] args) {
        System.out.println(inStockCount(new int[]{5, 0, 3, 0, 8})); // 3
    }
}`,
        solution: `public class Main {
    static int inStockCount(int[] quantities) {
        int count = 0;
        for (int q : quantities) {
            if (q > 0) {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        System.out.println(inStockCount(new int[]{5, 0, 3, 0, 8}));
    }
}`,
        run: { expected: '3' },
        hints: ['Счётчик: int count = 0;', 'Перебор: for (int q : quantities)', 'Условие: if (q > 0) count++;'],
        checks: [
          { type: 'regex', value: 'int\\s+inStockCount\\s*\\(', message: 'Объявлен метод inStockCount' },
          { type: 'regex', value: 'for\\s*\\(', message: 'Используется цикл for' },
          { type: 'regex', value: 'if\\s*\\(', message: 'Есть проверка условия' }
        ]
      }
    ]
  },
  {
    id: 'java-oop',
    area: 'Java',
    title: 'ООП и классы',
    subtitle: 'Объекты и иерархии',
    icon: 'Boxes',
    color: '#f97316',
    tasks: [
      {
        id: 'o1',
        title: 'Классы и объекты (POJO)',
        difficulty: 'Среднее',
        theory:
          'Класс описывает данные (**поля**) и поведение (**методы**). Хорошая практика: приватные поля + конструктор + геттеры (POJO).',
        task: 'Создай класс `User` с приватными полями `name` (String) и `age` (int), конструктором и геттерами `getName()`, `getAge()`.',
        starter: `public class User {
    // поля, конструктор, геттеры
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
        hints: ['Поля private', 'Конструктор: public User(String name, int age)', 'Геттер: public String getName() { return name; }'],
        checks: [
          { type: 'contains', value: 'class User', message: 'Объявлен класс User' },
          { type: 'regex', value: 'private\\s+String\\s+name', message: 'Приватное поле name' },
          { type: 'regex', value: 'public\\s+User\\s*\\(', message: 'Есть конструктор' },
          { type: 'contains', value: 'getName', message: 'Есть геттер getName' },
          { type: 'contains', value: 'getAge', message: 'Есть геттер getAge' }
        ]
      },
      {
        id: 'o2',
        title: 'Наследование: роли',
        difficulty: 'Среднее',
        theory:
          'Класс наследует другой через `extends` и **переопределяет** методы. `@Override` помечает переопределение. Базовое поведение — в родителе, особенное — в наследниках.',
        task: 'Дан класс `User` с `role()` → "user". Создай `Admin extends User`, переопределяющий `role()` → "admin". Ожидается `admin`.',
        starter: `public class Main {
    static class User {
        String role() {
            return "user";
        }
    }

    // создай Admin extends User

    public static void main(String[] args) {
        System.out.println(new Admin().role());
    }
}`,
        solution: `public class Main {
    static class User {
        String role() {
            return "user";
        }
    }

    static class Admin extends User {
        @Override
        String role() {
            return "admin";
        }
    }

    public static void main(String[] args) {
        System.out.println(new Admin().role());
    }
}`,
        run: { expected: 'admin' },
        hints: ['static class Admin extends User', 'Переопредели role() с @Override', 'Верни "admin"'],
        checks: [
          { type: 'regex', value: 'class\\s+Admin\\s+extends\\s+User', message: 'Admin наследует User' },
          { type: 'contains', value: '@Override', message: 'Метод помечен @Override' },
          { type: 'contains', value: 'admin', message: 'role() возвращает admin' }
        ]
      },
      {
        id: 'o3',
        title: 'Интерфейсы: уведомления',
        difficulty: 'Среднее',
        theory:
          'Интерфейс — **контракт** из методов без реализации. Класс реализует его через `implements`. Основа паттерна «стратегия»: email, SMS, push — разные реализации одного контракта.',
        task: 'Дан интерфейс `Notifier` с методом `String send(String message)`. Создай `EmailNotifier implements Notifier`, возвращающий `"Email: " + message`. Для `send("Hi")` ожидается `Email: Hi`.',
        starter: `interface Notifier {
    String send(String message);
}

// реализуй EmailNotifier implements Notifier
`,
        solution: `interface Notifier {
    String send(String message);
}

class EmailNotifier implements Notifier {
    @Override
    public String send(String message) {
        return "Email: " + message;
    }
}`,
        run: {
          expected: 'Email: Hi',
          harness: `class Main {
    public static void main(String[] args) {
        Notifier notifier = new EmailNotifier();
        System.out.println(notifier.send("Hi"));
    }
}`
        },
        hints: ['class EmailNotifier implements Notifier', 'Реализуй send() с @Override', 'Верни "Email: " + message'],
        checks: [
          { type: 'regex', value: 'class\\s+EmailNotifier\\s+implements\\s+Notifier', message: 'EmailNotifier реализует Notifier' },
          { type: 'regex', value: 'String\\s+send\\s*\\(', message: 'Реализован метод send' },
          { type: 'contains', value: 'Email: ', message: 'Возвращается "Email: " + message' }
        ]
      },
      {
        id: 'o4',
        title: 'Абстрактные классы: оплата',
        difficulty: 'Среднее',
        theory:
          'Абстрактный класс нельзя создать через `new` — он задаёт каркас и абстрактные методы для наследников. Удобно для семейств: способы оплаты, типы отчётов.',
        task: 'Дан абстрактный класс `PaymentMethod` с `name()`. Создай `CreditCard extends PaymentMethod` → `"credit_card"`. Ожидается `credit_card`.',
        starter: `public class Main {
    abstract static class PaymentMethod {
        abstract String name();
    }

    // создай CreditCard extends PaymentMethod

    public static void main(String[] args) {
        System.out.println(new CreditCard().name());
    }
}`,
        solution: `public class Main {
    abstract static class PaymentMethod {
        abstract String name();
    }

    static class CreditCard extends PaymentMethod {
        @Override
        String name() {
            return "credit_card";
        }
    }

    public static void main(String[] args) {
        System.out.println(new CreditCard().name());
    }
}`,
        run: { expected: 'credit_card' },
        hints: ['static class CreditCard extends PaymentMethod', 'Реализуй name() → "credit_card"'],
        checks: [
          { type: 'contains', value: 'abstract', message: 'Используется abstract' },
          { type: 'regex', value: 'class\\s+CreditCard\\s+extends\\s+PaymentMethod', message: 'CreditCard наследует PaymentMethod' },
          { type: 'contains', value: 'credit_card', message: 'name() возвращает credit_card' }
        ]
      },
      {
        id: 'o5',
        title: 'enum: статус заказа',
        difficulty: 'Лёгкое',
        theory:
          '`enum` задаёт фиксированный набор значений — например статусы заказа. Надёжнее строк: опечатка не скомпилируется.',
        task: 'Объяви `enum OrderStatus { NEW, PAID, SHIPPED, DELIVERED }` и выведи `OrderStatus.PAID` (ожидается `PAID`).',
        starter: `public class Main {
    enum OrderStatus {
        // NEW, PAID, SHIPPED, DELIVERED
    }

    public static void main(String[] args) {
        // выведи OrderStatus.PAID
    }
}`,
        solution: `public class Main {
    enum OrderStatus {
        NEW, PAID, SHIPPED, DELIVERED
    }

    public static void main(String[] args) {
        System.out.println(OrderStatus.PAID);
    }
}`,
        run: { expected: 'PAID' },
        hints: ['Значения через запятую', 'Доступ: OrderStatus.PAID'],
        checks: [
          { type: 'regex', value: 'enum\\s+OrderStatus', message: 'Объявлен enum OrderStatus' },
          { type: 'contains', value: 'PAID', message: 'Есть статус PAID' },
          { type: 'contains', value: 'DELIVERED', message: 'Есть статус DELIVERED' }
        ]
      },
      {
        id: 'o6',
        title: 'toString: лог объекта',
        difficulty: 'Среднее',
        theory:
          'Переопределённый `toString()` определяет, как объект выглядит в логах. Без него выводится бесполезное `Product@1b6d3586`. Маст-хэв для доменных классов.',
        task: 'В классе `Product(String name, int price)` переопредели `toString()` в формате `Product{name=\'Book\', price=500}`. Для `new Product("Book", 500)` ожидается эта строка.',
        starter: `public class Main {
    static class Product {
        String name;
        int price;
        Product(String name, int price) { this.name = name; this.price = price; }
        // переопредели toString()
    }

    public static void main(String[] args) {
        System.out.println(new Product("Book", 500));
    }
}`,
        solution: `public class Main {
    static class Product {
        String name;
        int price;
        Product(String name, int price) { this.name = name; this.price = price; }

        @Override
        public String toString() {
            return "Product{name='" + name + "', price=" + price + "}";
        }
    }

    public static void main(String[] args) {
        System.out.println(new Product("Book", 500));
    }
}`,
        run: { expected: "Product{name='Book', price=500}" },
        hints: ['@Override public String toString()', 'Собери строку: "Product{name=\'" + name + "\', price=" + price + "}"'],
        checks: [
          { type: 'contains', value: '@Override', message: 'Метод помечен @Override' },
          { type: 'contains', value: 'toString', message: 'Переопределён toString()' }
        ]
      }
    ]
  },
  {
    id: 'java-collections',
    area: 'Java',
    title: 'Коллекции',
    subtitle: 'List, Map, Set',
    icon: 'Layers',
    color: '#eab308',
    tasks: [
      {
        id: 'c1',
        title: 'List: основы',
        difficulty: 'Лёгкое',
        theory:
          '`List<T>` — упорядоченный изменяемый список. `new ArrayList<>()` создаёт его, `add` добавляет, `get(i)` берёт по индексу, `size()` — размер.',
        task: 'Создай `List<String> tasks`, добавь "Design" и "Code", выведи `tasks.size()` (ожидается `2`).',
        starter: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> tasks = new ArrayList<>();
        // добавь элементы и выведи размер
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> tasks = new ArrayList<>();
        tasks.add("Design");
        tasks.add("Code");
        System.out.println(tasks.size());
    }
}`,
        run: { expected: '2' },
        hints: ['Добавить: tasks.add("Design");', 'Размер: tasks.size()'],
        checks: [
          { type: 'contains', value: 'List<', message: 'Объявлен List' },
          { type: 'contains', value: 'ArrayList', message: 'Используется ArrayList' },
          { type: 'contains', value: '.add(', message: 'Элементы добавлены через add' },
          { type: 'contains', value: '.size(', message: 'Выводится размер через size' }
        ]
      },
      {
        id: 'c2',
        title: 'Перебор списка',
        difficulty: 'Лёгкое',
        theory:
          'Цикл `for (Тип x : коллекция)` (for-each) перебирает элементы. Классика — посчитать сумму, например итог корзины.',
        task: 'Дана корзина цен `List.of(100, 200, 50)`. Посчитай сумму циклом for-each и выведи (ожидается `350`).',
        starter: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> cart = List.of(100, 200, 50);
        // посчитай сумму циклом for-each
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> cart = List.of(100, 200, 50);
        int total = 0;
        for (int price : cart) {
            total += price;
        }
        System.out.println(total);
    }
}`,
        run: { expected: '350' },
        hints: ['for (int price : cart)', 'total += price;'],
        checks: [
          { type: 'regex', value: 'for\\s*\\(', message: 'Используется цикл for' },
          { type: 'contains', value: '+=', message: 'Сумма накапливается' }
        ]
      },
      {
        id: 'c3',
        title: 'Map: каталог цен',
        difficulty: 'Лёгкое',
        theory:
          '`Map<K, V>` хранит пары «ключ → значение», например товар → цена. `put` добавляет, `get` достаёт, `getOrDefault(k, def)` возвращает запасное значение, если ключа нет.',
        task: 'Создай каталог `Map<String, Integer>`: `"book" → 500`, `"pen" → 50`. Выведи цену `"book"` через `getOrDefault(..., 0)` (ожидается `500`).',
        starter: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> prices = new HashMap<>();
        // заполни каталог и выведи цену "book"
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<String, Integer> prices = new HashMap<>();
        prices.put("book", 500);
        prices.put("pen", 50);
        System.out.println(prices.getOrDefault("book", 0));
    }
}`,
        run: { expected: '500' },
        hints: ['Добавить: prices.put("book", 500);', 'Получить: prices.getOrDefault("book", 0)'],
        checks: [
          { type: 'contains', value: 'Map<', message: 'Объявлен Map' },
          { type: 'contains', value: '.put(', message: 'Каталог заполнен через put' },
          { type: 'contains', value: 'getOrDefault', message: 'Использован getOrDefault' }
        ]
      },
      {
        id: 'c4',
        title: 'Set: уникальные значения',
        difficulty: 'Лёгкое',
        theory:
          '`Set<T>` хранит только уникальные элементы — дубликаты игнорируются. Удобно для тегов, посещённых id и т. п.',
        task: 'Добавь в `Set<String>` теги `"java"`, `"spring"`, `"java"` и выведи `size()` (ожидается `2` — дубликат не считается).',
        starter: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> tags = new HashSet<>();
        // добавь теги (один дубль) и выведи размер
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<String> tags = new HashSet<>();
        tags.add("java");
        tags.add("spring");
        tags.add("java");
        System.out.println(tags.size());
    }
}`,
        run: { expected: '2' },
        hints: ['Set игнорирует повторы', 'tags.add("java"); ... tags.size()'],
        checks: [
          { type: 'contains', value: 'Set<', message: 'Объявлен Set' },
          { type: 'contains', value: 'HashSet', message: 'Используется HashSet' },
          { type: 'contains', value: '.add(', message: 'Элементы добавлены через add' }
        ]
      },
      {
        id: 'c5',
        title: 'Сортировка',
        difficulty: 'Среднее',
        theory:
          'Список можно отсортировать `Collections.sort(list)` (по возрастанию) или `list.sort(Comparator...)`. Для своих правил используют `Comparator`.',
        task: 'Отсортируй цены `[300, 100, 200]` по возрастанию и выведи список (ожидается `[100, 200, 300]`).',
        starter: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> prices = new ArrayList<>(List.of(300, 100, 200));
        // отсортируй и выведи
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> prices = new ArrayList<>(List.of(300, 100, 200));
        Collections.sort(prices);
        System.out.println(prices);
    }
}`,
        run: { expected: '[100, 200, 300]' },
        hints: ['Collections.sort(prices);', 'Затем выведи список целиком'],
        checks: [
          { type: 'regex', value: 'Collections\\.sort|\\.sort\\s*\\(', message: 'Список сортируется' }
        ]
      }
    ]
  },
  {
    id: 'java-streams',
    area: 'Java',
    title: 'Stream API',
    subtitle: 'Обработка данных',
    icon: 'Filter',
    color: '#f59e0b',
    tasks: [
      {
        id: 's1',
        title: 'filter: активные пользователи',
        difficulty: 'Среднее',
        theory:
          'Stream обрабатывает коллекции декларативно: `.stream().filter(...).map(...).collect(...)`. Так в реальном коде отбирают и преобразуют данные.',
        task: 'Верни **имена активных** пользователей в методе `activeNames`. Для данных в `main` ожидается `[Anna, Eva]`.',
        starter: `import java.util.*;
import java.util.stream.*;

public class Main {
    static class User {
        String name;
        boolean active;
        User(String name, boolean active) { this.name = name; this.active = active; }
    }

    static List<String> activeNames(List<User> users) {
        // верни имена активных
    }

    public static void main(String[] args) {
        List<User> users = List.of(
                new User("Anna", true),
                new User("Bob", false),
                new User("Eva", true));
        System.out.println(activeNames(users));
    }
}`,
        solution: `import java.util.*;
import java.util.stream.*;

public class Main {
    static class User {
        String name;
        boolean active;
        User(String name, boolean active) { this.name = name; this.active = active; }
    }

    static List<String> activeNames(List<User> users) {
        return users.stream()
                .filter(u -> u.active)
                .map(u -> u.name)
                .collect(Collectors.toList());
    }

    public static void main(String[] args) {
        List<User> users = List.of(
                new User("Anna", true),
                new User("Bob", false),
                new User("Eva", true));
        System.out.println(activeNames(users));
    }
}`,
        run: { expected: '[Anna, Eva]' },
        hints: ['users.stream()', '.filter(u -> u.active)', '.map(u -> u.name).collect(Collectors.toList())'],
        checks: [
          { type: 'contains', value: '.stream()', message: 'Используется Stream' },
          { type: 'contains', value: '.filter(', message: 'Применён filter' },
          { type: 'contains', value: '.map(', message: 'Применён map' },
          { type: 'contains', value: '.collect(', message: 'Результат собран через collect' }
        ]
      },
      {
        id: 's2',
        title: 'map + sum: выручка',
        difficulty: 'Среднее',
        theory:
          'Аналитика: сумма/среднее/максимум по объектам. `mapToInt(...)` извлекает число, `.sum()` складывает. Ссылка на метод `Order::getAmount` короче лямбды.',
        task: 'Посчитай суммарную выручку по заказам (`getAmount`) через Stream. Для сумм 1200, 800, 500 ожидается `2500`.',
        starter: `import java.util.*;

public class Main {
    static class Order {
        int amount;
        Order(int amount) { this.amount = amount; }
        int getAmount() { return amount; }
    }

    public static void main(String[] args) {
        List<Order> orders = List.of(new Order(1200), new Order(800), new Order(500));
        // посчитай суммарную выручку
    }
}`,
        solution: `import java.util.*;

public class Main {
    static class Order {
        int amount;
        Order(int amount) { this.amount = amount; }
        int getAmount() { return amount; }
    }

    public static void main(String[] args) {
        List<Order> orders = List.of(new Order(1200), new Order(800), new Order(500));
        int total = orders.stream()
                .mapToInt(Order::getAmount)
                .sum();
        System.out.println(total);
    }
}`,
        run: { expected: '2500' },
        hints: ['.mapToInt(Order::getAmount)', '.sum()'],
        checks: [
          { type: 'contains', value: '.stream()', message: 'Используется Stream' },
          { type: 'contains', value: 'mapToInt', message: 'Применён mapToInt' },
          { type: 'regex', value: 'sum\\s*\\(', message: 'Свёртка через sum()' }
        ]
      },
      {
        id: 's3',
        title: 'count: сколько подходит',
        difficulty: 'Лёгкое',
        theory:
          '`filter(...).count()` считает, сколько элементов удовлетворяют условию. Возвращает `long`.',
        task: 'Дан список возрастов `15, 20, 17, 30`. Посчитай, сколько из них взрослые (`>= 18`), и выведи (ожидается `2`).',
        starter: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> ages = List.of(15, 20, 17, 30);
        // посчитай взрослых
    }
}`,
        solution: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> ages = List.of(15, 20, 17, 30);
        long adults = ages.stream()
                .filter(a -> a >= 18)
                .count();
        System.out.println(adults);
    }
}`,
        run: { expected: '2' },
        hints: ['.filter(a -> a >= 18)', '.count()'],
        checks: [
          { type: 'contains', value: '.stream()', message: 'Используется Stream' },
          { type: 'contains', value: '.filter(', message: 'Применён filter' },
          { type: 'contains', value: '.count(', message: 'Подсчёт через count' }
        ]
      },
      {
        id: 's4',
        title: 'map + collect: преобразование',
        difficulty: 'Среднее',
        theory:
          '`map` преобразует каждый элемент. `String::toUpperCase` — ссылка на метод. Результат собирается в список через `collect(Collectors.toList())`.',
        task: 'Дан список имён `["anna", "bob"]`. Переведи их в верхний регистр и собери в список (ожидается `[ANNA, BOB]`).',
        starter: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("anna", "bob");
        // переведи в верхний регистр
    }
}`,
        solution: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<String> names = List.of("anna", "bob");
        List<String> upper = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        System.out.println(upper);
    }
}`,
        run: { expected: '[ANNA, BOB]' },
        hints: ['.map(String::toUpperCase)', '.collect(Collectors.toList())'],
        checks: [
          { type: 'contains', value: '.map(', message: 'Применён map' },
          { type: 'contains', value: 'toUpperCase', message: 'Перевод в верхний регистр' },
          { type: 'contains', value: '.collect(', message: 'Результат собран через collect' }
        ]
      },
      {
        id: 's5',
        title: 'groupingBy: группировка',
        difficulty: 'Сложное',
        theory:
          '`Collectors.groupingBy(...)` группирует элементы по ключу в `Map<Ключ, List<...>>`. Например, слова по их длине.',
        task: 'Сгруппируй слова `"a", "bb", "cc", "ddd"` по длине и выведи группу с длиной 2 (ожидается `[bb, cc]`).',
        starter: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        // сгруппируй по длине и выведи группу длины 2
    }
}`,
        solution: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        Map<Integer, List<String>> byLength = Stream.of("a", "bb", "cc", "ddd")
                .collect(Collectors.groupingBy(String::length));
        System.out.println(byLength.get(2));
    }
}`,
        run: { expected: '[bb, cc]' },
        hints: ['Collectors.groupingBy(String::length)', 'Возьми группу: byLength.get(2)'],
        checks: [
          { type: 'contains', value: 'groupingBy', message: 'Используется groupingBy' },
          { type: 'contains', value: '.collect(', message: 'Сбор через collect' }
        ]
      }
    ]
  },
  {
    id: 'java-functional',
    area: 'Java',
    title: 'Функции и обобщения',
    subtitle: 'Лямбды, Optional, дженерики',
    icon: 'Sigma',
    color: '#fb923c',
    tasks: [
      {
        id: 'f1',
        title: 'Лямбды: валидация',
        difficulty: 'Среднее',
        theory:
          'Лямбда — короткая запись функции: `x -> условие`. `Predicate<T>` возвращает `boolean` и вызывается через `.test(x)`. Применяется в валидации и фильтрах.',
        task: 'Создай `Predicate<String> isValidEmail`, проверяющий, что строка содержит `"@"`. Выведи `isValidEmail.test("user@mail.com")` (ожидается `true`).',
        starter: `import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        Predicate<String> isValidEmail = null; // замени на лямбду
        System.out.println(isValidEmail.test("user@mail.com"));
    }
}`,
        solution: `import java.util.function.Predicate;

public class Main {
    public static void main(String[] args) {
        Predicate<String> isValidEmail = email -> email.contains("@");
        System.out.println(isValidEmail.test("user@mail.com"));
    }
}`,
        run: { expected: 'true' },
        hints: ['Лямбда: email -> email.contains("@")'],
        checks: [
          { type: 'contains', value: 'Predicate', message: 'Используется Predicate' },
          { type: 'contains', value: '->', message: 'Написана лямбда' },
          { type: 'contains', value: 'contains(', message: 'Проверка через contains' },
          { type: 'contains', value: '.test(', message: 'Вызов через test()' }
        ]
      },
      {
        id: 'f2',
        title: 'Optional: значение по умолчанию',
        difficulty: 'Среднее',
        theory:
          '`Optional<T>` — контейнер, который может быть пустым; защищает от `NullPointerException`. Так репозитории возвращают «найдено / не найдено». `orElse(x)` даёт запасное значение.',
        task: 'Пользователь не найден: `Optional<String> userName = Optional.empty()`. Выведи имя или `"Guest"`, если пусто (ожидается `Guest`).',
        starter: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> userName = Optional.empty();
        // выведи имя или "Guest"
    }
}`,
        solution: `import java.util.Optional;

public class Main {
    public static void main(String[] args) {
        Optional<String> userName = Optional.empty();
        System.out.println(userName.orElse("Guest"));
    }
}`,
        run: { expected: 'Guest' },
        hints: ['userName.orElse("Guest")'],
        checks: [
          { type: 'contains', value: 'Optional', message: 'Используется Optional' },
          { type: 'contains', value: 'orElse', message: 'Запасное значение через orElse' },
          { type: 'contains', value: 'Guest', message: 'Значение по умолчанию — Guest' }
        ]
      },
      {
        id: 'f3',
        title: 'Function: преобразование',
        difficulty: 'Среднее',
        theory:
          '`Function<T, R>` — функция из `T` в `R`, вызывается через `.apply(x)`. Используется для трансформаций и маппинга.',
        task: 'Создай `Function<String, Integer> length`, возвращающую длину строки. Выведи `length.apply("hello")` (ожидается `5`).',
        starter: `import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        Function<String, Integer> length = null; // замени на лямбду
        System.out.println(length.apply("hello"));
    }
}`,
        solution: `import java.util.function.Function;

public class Main {
    public static void main(String[] args) {
        Function<String, Integer> length = s -> s.length();
        System.out.println(length.apply("hello"));
    }
}`,
        run: { expected: '5' },
        hints: ['Лямбда: s -> s.length()', 'Вызов: length.apply("hello")'],
        checks: [
          { type: 'contains', value: 'Function<', message: 'Используется Function' },
          { type: 'contains', value: '->', message: 'Написана лямбда' },
          { type: 'contains', value: '.apply(', message: 'Вызов через apply()' }
        ]
      },
      {
        id: 'f4',
        title: 'Дженерик-класс: обёртка API',
        difficulty: 'Среднее',
        theory:
          'Дженерики (`<T>`) дают типобезопасность для любого типа. Частый приём — обобщённая обёртка ответа `ApiResponse<T>`, несущая данные любого типа.',
        task: 'Реализуй `ApiResponse<T>` с полем `data`, конструктором и `getData()`. Для `new ApiResponse<>("OK")` ожидается `OK`.',
        starter: `public class Main {
    static class ApiResponse<T> {
        // поле data типа T, конструктор, getData()
    }

    public static void main(String[] args) {
        ApiResponse<String> response = new ApiResponse<>("OK");
        System.out.println(response.getData());
    }
}`,
        solution: `public class Main {
    static class ApiResponse<T> {
        private T data;

        public ApiResponse(T data) {
            this.data = data;
        }

        public T getData() {
            return data;
        }
    }

    public static void main(String[] args) {
        ApiResponse<String> response = new ApiResponse<>("OK");
        System.out.println(response.getData());
    }
}`,
        run: { expected: 'OK' },
        hints: ['Поле: private T data;', 'Метод: public T getData() { return data; }'],
        checks: [
          { type: 'regex', value: 'class\\s+ApiResponse\\s*<\\s*T\\s*>', message: 'Объявлен ApiResponse<T>' },
          { type: 'regex', value: 'T\\s+data', message: 'Поле data типа T' },
          { type: 'regex', value: 'T\\s+getData\\s*\\(', message: 'getData() возвращает T' }
        ]
      },
      {
        id: 'f5',
        title: 'Обобщённый метод',
        difficulty: 'Сложное',
        theory:
          'Метод тоже может быть обобщённым: `static <T> T method(...)`. Тип выводится из аргументов. Так пишут переиспользуемые утилиты.',
        task: 'Напиши `static <T> T firstOrNull(List<T> list)`, возвращающий первый элемент или `null`. Для `["a", "b"]` ожидается `a`.',
        starter: `import java.util.List;

public class Main {
    // обобщённый метод firstOrNull

    public static void main(String[] args) {
        System.out.println(firstOrNull(List.of("a", "b")));
    }
}`,
        solution: `import java.util.List;

public class Main {
    static <T> T firstOrNull(List<T> list) {
        return list.isEmpty() ? null : list.get(0);
    }

    public static void main(String[] args) {
        System.out.println(firstOrNull(List.of("a", "b")));
    }
}`,
        run: { expected: 'a' },
        hints: ['Сигнатура: static <T> T firstOrNull(List<T> list)', 'Тернарный оператор: list.isEmpty() ? null : list.get(0)'],
        checks: [
          { type: 'regex', value: 'static\\s*<\\s*T\\s*>', message: 'Метод обобщённый (<T>)' },
          { type: 'contains', value: 'firstOrNull', message: 'Объявлен метод firstOrNull' },
          { type: 'contains', value: '.get(0)', message: 'Берётся первый элемент' }
        ]
      }
    ]
  },
  {
    id: 'java-exceptions',
    area: 'Java',
    title: 'Исключения',
    subtitle: 'Обработка ошибок',
    icon: 'ShieldAlert',
    color: '#ef4444',
    tasks: [
      {
        id: 'e1',
        title: 'try/catch: списание со счёта',
        difficulty: 'Среднее',
        theory:
          'Ошибки бизнес-логики сигнализируют исключениями. `throw new IllegalArgumentException(...)` прерывает выполнение, а `try/catch` обрабатывает проблему, не роняя программу.',
        task: 'В методе `withdraw(int balance, int amount)` при `amount > balance` выброси `IllegalArgumentException`, иначе верни остаток. В `main` вызови внутри `try/catch`.',
        starter: `public class Main {
    static int withdraw(int balance, int amount) {
        // если средств не хватает — выброси исключение
        return balance - amount;
    }

    public static void main(String[] args) {
        // вызови withdraw(100, 150) внутри try/catch
    }
}`,
        solution: `public class Main {
    static int withdraw(int balance, int amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient funds");
        }
        return balance - amount;
    }

    public static void main(String[] args) {
        try {
            System.out.println(withdraw(100, 150));
        } catch (IllegalArgumentException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
        hints: ['Проверь if (amount > balance)', 'throw new IllegalArgumentException(...)', 'try { ... } catch (IllegalArgumentException e) { ... }'],
        checks: [
          { type: 'regex', value: 'amount\\s*>\\s*balance', message: 'Есть проверка нехватки средств' },
          { type: 'contains', value: 'throw new', message: 'Исключение выбрасывается через throw' },
          { type: 'contains', value: 'IllegalArgumentException', message: 'Используется IllegalArgumentException' },
          { type: 'contains', value: 'try', message: 'Есть блок try' },
          { type: 'contains', value: 'catch', message: 'Есть блок catch' }
        ]
      },
      {
        id: 'e2',
        title: 'Своё исключение',
        difficulty: 'Среднее',
        theory:
          'Своё исключение — класс, наследующий `RuntimeException`. Это делает ошибки доменными и читаемыми: `NotFoundException` понятнее, чем общая ошибка.',
        task: 'Создай `NotFoundException extends RuntimeException`. Метод `find(boolean exists)` бросает его при `!exists`. В `main` поймай и выведи сообщение (ожидается `not found`).',
        starter: `public class Main {
    // объяви NotFoundException

    static String find(boolean exists) {
        // брось NotFoundException, если !exists
        return "ok";
    }

    public static void main(String[] args) {
        try {
            find(false);
        } catch (NotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
        solution: `public class Main {
    static class NotFoundException extends RuntimeException {
        public NotFoundException(String message) {
            super(message);
        }
    }

    static String find(boolean exists) {
        if (!exists) {
            throw new NotFoundException("not found");
        }
        return "ok";
    }

    public static void main(String[] args) {
        try {
            find(false);
        } catch (NotFoundException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
        run: { expected: 'not found' },
        hints: ['class NotFoundException extends RuntimeException с конструктором super(message)', 'throw new NotFoundException("not found")'],
        checks: [
          { type: 'regex', value: 'class\\s+NotFoundException\\s+extends\\s+RuntimeException', message: 'NotFoundException наследует RuntimeException' },
          { type: 'contains', value: 'throw new', message: 'Исключение выбрасывается' },
          { type: 'contains', value: 'catch', message: 'Исключение перехватывается' }
        ]
      },
      {
        id: 'e3',
        title: 'finally',
        difficulty: 'Лёгкое',
        theory:
          'Блок `finally` выполняется всегда — даже если был `return` или исключение. Используется для освобождения ресурсов.',
        task: 'Метод `process()` в `try` возвращает `"work"`, а в `finally` печатает `"cleanup"`. Ожидается вывод `cleanup` затем `work`.',
        starter: `public class Main {
    static String process() {
        try {
            return "work";
        } finally {
            // напечатай "cleanup"
        }
    }

    public static void main(String[] args) {
        System.out.println(process());
    }
}`,
        solution: `public class Main {
    static String process() {
        try {
            return "work";
        } finally {
            System.out.println("cleanup");
        }
    }

    public static void main(String[] args) {
        System.out.println(process());
    }
}`,
        run: { expected: 'cleanup\nwork' },
        hints: ['finally выполняется до фактического возврата', 'В finally: System.out.println("cleanup")'],
        checks: [
          { type: 'contains', value: 'finally', message: 'Есть блок finally' },
          { type: 'contains', value: 'cleanup', message: 'В finally печатается cleanup' }
        ]
      },
      {
        id: 'e4',
        title: 'try-with-resources',
        difficulty: 'Среднее',
        theory:
          'Ресурсы, реализующие `AutoCloseable`, удобно открывать в `try (...)` — Java сама вызовет `close()` в конце. Так закрывают файлы, соединения с БД.',
        task: 'Класс `Resource implements AutoCloseable` печатает `use` в методе и `close` при закрытии. Открой его в `try-with-resources` и вызови `use()`. Ожидается `use` затем `close`.',
        starter: `public class Main {
    static class Resource implements AutoCloseable {
        public void use() { System.out.println("use"); }
        public void close() { System.out.println("close"); }
    }

    public static void main(String[] args) {
        // открой Resource в try-with-resources и вызови use()
    }
}`,
        solution: `public class Main {
    static class Resource implements AutoCloseable {
        public void use() { System.out.println("use"); }
        public void close() { System.out.println("close"); }
    }

    public static void main(String[] args) {
        try (Resource r = new Resource()) {
            r.use();
        }
    }
}`,
        run: { expected: 'use\nclose' },
        hints: ['try (Resource r = new Resource()) { ... }', 'close() вызовется автоматически в конце'],
        checks: [
          { type: 'regex', value: 'try\\s*\\(', message: 'Используется try-with-resources' },
          { type: 'contains', value: 'AutoCloseable', message: 'Ресурс реализует AutoCloseable' },
          { type: 'contains', value: '.use()', message: 'Вызывается use()' }
        ]
      },
      {
        id: 'e5',
        title: 'Валидация аргумента',
        difficulty: 'Среднее',
        theory:
          'Проверка входных данных в начале метода («fail fast») — частый приём. При неверном аргументе бросают `IllegalArgumentException`.',
        task: 'Метод `requireName(String name)` бросает `IllegalArgumentException`, если имя `null` или пустое. В `main` вызови `requireName("")` в `try/catch` и выведи сообщение (ожидается `name required`).',
        starter: `public class Main {
    static String requireName(String name) {
        // проверь name на null/пустоту
        return name;
    }

    public static void main(String[] args) {
        try {
            requireName("");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
        solution: `public class Main {
    static String requireName(String name) {
        if (name == null || name.isEmpty()) {
            throw new IllegalArgumentException("name required");
        }
        return name;
    }

    public static void main(String[] args) {
        try {
            requireName("");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}`,
        run: { expected: 'name required' },
        hints: ['Проверка: if (name == null || name.isEmpty())', 'throw new IllegalArgumentException("name required")'],
        checks: [
          { type: 'contains', value: 'IllegalArgumentException', message: 'Используется IllegalArgumentException' },
          { type: 'contains', value: 'throw new', message: 'Исключение выбрасывается' },
          { type: 'regex', value: 'isEmpty\\(\\)|length\\(\\)\\s*==\\s*0', message: 'Проверка на пустоту' }
        ]
      }
    ]
  },

  // ───────────────────────── SPRING BOOT ─────────────────────────
  {
    id: 'spring-rest',
    area: 'Spring Boot',
    title: 'REST-контроллеры',
    subtitle: 'HTTP-эндпоинты',
    icon: 'Server',
    color: '#22c55e',
    tasks: [
      {
        id: 'sr1',
        title: 'GET-эндпоинт',
        difficulty: 'Лёгкое',
        theory:
          '`@RestController` помечает класс-обработчик HTTP. `@GetMapping("/path")` связывает метод с GET-запросом, а возвращаемое значение становится телом ответа.',
        task: 'Создай контроллер `HelloController` с методом, который на GET `/hello` возвращает `"Hello!"`.',
        starter: `import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// добавь аннотацию контроллера
public class HelloController {
    // метод с @GetMapping("/hello")
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
        hints: ['Над классом: @RestController', 'Над методом: @GetMapping("/hello")'],
        checks: [
          { type: 'contains', value: '@RestController', message: 'Класс помечен @RestController' },
          { type: 'regex', value: '@GetMapping\\(\\s*"/hello"', message: 'Метод связан с GET /hello' },
          { type: 'contains', value: 'Hello!', message: 'Возвращается строка Hello!' }
        ]
      },
      {
        id: 'sr2',
        title: 'Параметры запроса',
        difficulty: 'Лёгкое',
        theory:
          '`@RequestParam` достаёт параметр из строки запроса, например `/search?q=java`. Можно задать `defaultValue` и `required = false`.',
        task: 'Метод на GET `/search` принимает параметр `q` через `@RequestParam` и возвращает `"Ищу: " + q`.',
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
        hints: ['@RequestParam String q', 'Верни "Ищу: " + q'],
        checks: [
          { type: 'contains', value: '@RequestParam', message: 'Параметр через @RequestParam' },
          { type: 'regex', value: '@GetMapping\\(\\s*"/search"', message: 'GET /search' },
          { type: 'contains', value: 'Ищу:', message: 'Возвращается нужная строка' }
        ]
      },
      {
        id: 'sr3',
        title: 'POST, тело и путь',
        difficulty: 'Среднее',
        theory:
          '`@PostMapping` обрабатывает POST. `@RequestBody` превращает JSON тела в объект. `@PathVariable` достаёт значение из URL, например `/users/{id}`.',
        task: 'Добавь `create` на POST `/users` с `@RequestBody User`, и `getById` на GET `/users/{id}` с `@PathVariable`.',
        starter: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    // POST /users — принять User из тела

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
        hints: ['@PostMapping + @RequestBody User user', '@GetMapping("/{id}") + @PathVariable Long id'],
        checks: [
          { type: 'contains', value: '@PostMapping', message: 'Есть @PostMapping' },
          { type: 'contains', value: '@RequestBody', message: 'Тело через @RequestBody' },
          { type: 'regex', value: '@GetMapping\\(\\s*"/\\{id\\}"', message: 'GET с путём /{id}' },
          { type: 'contains', value: '@PathVariable', message: 'id через @PathVariable' }
        ]
      },
      {
        id: 'sr4',
        title: 'Ответ со статусом',
        difficulty: 'Среднее',
        theory:
          '`ResponseEntity<T>` управляет HTTP-ответом: телом, статусом, заголовками. `ResponseEntity.ok(data)` → 200, `ResponseEntity.notFound().build()` → 404.',
        task: 'Метод `find` возвращает `ResponseEntity<String>`: при `id > 0` — `ok("found")`, иначе — `notFound().build()`.',
        starter: `import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {

    @GetMapping("/items/{id}")
    public ResponseEntity<String> find(@PathVariable Long id) {
        // верни 200 или 404
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
        hints: ['Успех: ResponseEntity.ok("found")', 'Не найдено: ResponseEntity.notFound().build()'],
        checks: [
          { type: 'contains', value: 'ResponseEntity.ok(', message: 'Возврат 200 через ok' },
          { type: 'contains', value: 'notFound()', message: 'Возврат 404 через notFound' },
          { type: 'regex', value: 'id\\s*>\\s*0', message: 'Есть проверка по id' }
        ]
      },
      {
        id: 'sr5',
        title: 'PUT и DELETE',
        difficulty: 'Лёгкое',
        theory:
          'REST использует разные методы: `@PutMapping` — обновление, `@DeleteMapping` — удаление, обычно с `/{id}`.',
        task: 'В `ItemController` добавь `update` на PUT `/items/{id}` и `delete` на DELETE `/items/{id}`.',
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
        hints: ['@PutMapping("/{id}")', '@DeleteMapping("/{id}")'],
        checks: [
          { type: 'contains', value: '@PutMapping', message: 'Есть @PutMapping' },
          { type: 'contains', value: '@DeleteMapping', message: 'Есть @DeleteMapping' },
          { type: 'contains', value: '@PathVariable', message: 'id через @PathVariable' }
        ]
      }
    ]
  },
  {
    id: 'spring-di',
    area: 'Spring Boot',
    title: 'Бины и зависимости',
    subtitle: 'DI и конфигурация',
    icon: 'Leaf',
    color: '#16a34a',
    tasks: [
      {
        id: 'sd1',
        title: 'Точка входа приложения',
        difficulty: 'Лёгкое',
        theory:
          'Spring Boot приложение помечается `@SpringBootApplication`. Запуск — `SpringApplication.run(Класс.class, args)` в `main`.',
        task: 'Создай класс `App` с `@SpringBootApplication` и `main`, запускающим приложение.',
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
        hints: ['Над классом: @SpringBootApplication', 'SpringApplication.run(App.class, args);'],
        checks: [
          { type: 'contains', value: '@SpringBootApplication', message: 'Класс помечен @SpringBootApplication' },
          { type: 'regex', value: 'SpringApplication\\.run\\(', message: 'Запуск через SpringApplication.run' }
        ]
      },
      {
        id: 'sd2',
        title: 'Внедрение зависимостей',
        difficulty: 'Среднее',
        theory:
          'Бизнес-логику кладут в `@Service`. Spring сам создаёт бины и **внедряет** их. Современный способ — внедрение через конструктор (вместо `@Autowired` на поле).',
        task: 'Создай `UserService` (`@Service`). В `UserController` внедри его через конструктор.',
        starter: `import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

@Service
class UserService {
    public String greeting() {
        return "Hi";
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
        return "Hi";
    }
}

@RestController
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
}`,
        hints: ['Поле: private final UserService userService;', 'Конструктор принимает UserService и сохраняет в поле'],
        checks: [
          { type: 'contains', value: '@Service', message: 'Сервис помечен @Service' },
          { type: 'regex', value: 'private\\s+final\\s+UserService', message: 'Поле UserService как final' },
          { type: 'regex', value: 'public\\s+UserController\\s*\\(\\s*UserService', message: 'Внедрение через конструктор' },
          { type: 'contains', value: 'this.userService', message: 'Зависимость сохранена в поле' }
        ]
      },
      {
        id: 'sd3',
        title: 'Конфигурация и бины',
        difficulty: 'Среднее',
        theory:
          'Класс с `@Configuration` описывает бины вручную. Метод с `@Bean` возвращает объект, который Spring помещает в контейнер.',
        task: 'Создай `AppConfig` с `@Configuration` и методом `greeting()` с `@Bean`, возвращающим `"Hello bean"`.',
        starter: `import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

// пометь класс как конфигурацию
public class AppConfig {
    // бин greeting -> "Hello bean"
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
        hints: ['@Configuration над классом', '@Bean над методом'],
        checks: [
          { type: 'contains', value: '@Configuration', message: 'Класс помечен @Configuration' },
          { type: 'contains', value: '@Bean', message: 'Метод помечен @Bean' },
          { type: 'contains', value: 'Hello bean', message: 'Бин возвращает нужное значение' }
        ]
      },
      {
        id: 'sd4',
        title: 'Свойства и @Value',
        difficulty: 'Лёгкое',
        theory:
          'Значения из `application.properties` внедряются через `@Value("${ключ}")`. Значение по умолчанию — после двоеточия: `${ключ:по_умолчанию}`.',
        task: 'Внедри свойство `app.name` (по умолчанию `Demo`) в поле `appName`.',
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
        hints: ['@Value("\${app.name:Demo}")', 'После двоеточия — значение по умолчанию'],
        checks: [
          { type: 'contains', value: '@Value', message: 'Используется @Value' },
          { type: 'contains', value: 'app.name', message: 'Внедряется app.name' },
          { type: 'contains', value: 'Demo', message: 'Задано значение по умолчанию' }
        ]
      },
      {
        id: 'sd5',
        title: 'DTO и маппинг',
        difficulty: 'Среднее',
        theory:
          'DTO отделяет внешнее API от сущностей БД. Преобразование «сущность → DTO» выносят в отдельный метод-маппер.',
        task: 'В `UserMapper` напиши `toDto(User user)`, возвращающий `UserDto` со скопированным полем `name`.',
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
        hints: ['public UserDto toDto(User user)', 'Создай new UserDto(), скопируй name, верни dto'],
        checks: [
          { type: 'regex', value: 'UserDto\\s+toDto\\s*\\(\\s*User', message: 'Метод toDto(User) объявлен' },
          { type: 'contains', value: 'new UserDto', message: 'Создаётся новый UserDto' },
          { type: 'contains', value: 'return', message: 'DTO возвращается' }
        ]
      }
    ]
  },
  {
    id: 'spring-validation',
    area: 'Spring Boot',
    title: 'Валидация и ошибки',
    subtitle: 'Надёжное API',
    icon: 'ShieldCheck',
    color: '#10b981',
    tasks: [
      {
        id: 'sv1',
        title: 'Валидация тела запроса',
        difficulty: 'Среднее',
        theory:
          'Bean Validation проверяет входные данные: `@NotBlank`, `@Size`. В контроллере `@Valid` перед телом запускает проверку, и при ошибке Spring вернёт 400.',
        task: 'В `UserDto` пометь `name` как `@NotBlank` и `@Size(min = 2)`. В контроллере прими тело с `@Valid @RequestBody`.',
        starter: `import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import org.springframework.web.bind.annotation.*;

class UserDto {
    // name: не пустое, минимум 2 символа
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
        hints: ['Над полем: @NotBlank и @Size(min = 2)', 'В контроллере: @Valid @RequestBody UserDto dto'],
        checks: [
          { type: 'contains', value: '@NotBlank', message: 'Поле помечено @NotBlank' },
          { type: 'contains', value: '@Size', message: 'Ограничение длины через @Size' },
          { type: 'contains', value: '@Valid', message: 'Тело валидируется через @Valid' },
          { type: 'contains', value: '@RequestBody', message: 'Тело через @RequestBody' }
        ]
      },
      {
        id: 'sv2',
        title: 'Код ответа для исключения',
        difficulty: 'Лёгкое',
        theory:
          'Аннотация `@ResponseStatus` над исключением задаёт HTTP-код. Так `NotFoundException` автоматически вернёт 404.',
        task: 'Создай `NotFoundException extends RuntimeException` с `@ResponseStatus(HttpStatus.NOT_FOUND)`.',
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
        hints: ['@ResponseStatus(HttpStatus.NOT_FOUND) над классом'],
        checks: [
          { type: 'contains', value: '@ResponseStatus', message: 'Используется @ResponseStatus' },
          { type: 'contains', value: 'HttpStatus.NOT_FOUND', message: 'Код 404' },
          { type: 'regex', value: 'extends\\s+RuntimeException', message: 'Наследует RuntimeException' }
        ]
      },
      {
        id: 'sv3',
        title: 'Глобальный обработчик ошибок',
        difficulty: 'Среднее',
        theory:
          '`@RestControllerAdvice` ловит исключения всех контроллеров централизованно. Метод с `@ExceptionHandler(X.class)` обрабатывает конкретный тип.',
        task: 'Создай `@RestControllerAdvice` класс с `@ExceptionHandler(NotFoundException.class)`, возвращающим `ResponseEntity` со статусом 404.',
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
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found");
    }
}

class NotFoundException extends RuntimeException {}`,
        hints: ['@RestControllerAdvice над классом', '@ExceptionHandler(NotFoundException.class)', 'ResponseEntity.status(HttpStatus.NOT_FOUND).body(...)'],
        checks: [
          { type: 'contains', value: '@RestControllerAdvice', message: 'Класс помечен @RestControllerAdvice' },
          { type: 'contains', value: '@ExceptionHandler', message: 'Есть @ExceptionHandler' },
          { type: 'contains', value: 'HttpStatus.NOT_FOUND', message: 'Возвращается статус 404' }
        ]
      },
      {
        id: 'sv4',
        title: 'Ограничения полей',
        difficulty: 'Лёгкое',
        theory:
          'Аннотации валидации описывают правила прямо на полях DTO: `@Email` — корректный e-mail, `@Min` — минимальное число, `@NotNull` — обязательность.',
        task: 'В `RegisterDto` пометь `email` как `@Email`, а `age` как `@Min(18)`.',
        starter: `import jakarta.validation.constraints.*;

public class RegisterDto {
    // email: корректный адрес
    public String email;

    // age: не меньше 18
    public int age;
}`,
        solution: `import jakarta.validation.constraints.*;

public class RegisterDto {
    @Email
    public String email;

    @Min(18)
    public int age;
}`,
        hints: ['@Email над email', '@Min(18) над age'],
        checks: [
          { type: 'contains', value: '@Email', message: 'email помечен @Email' },
          { type: 'contains', value: '@Min', message: 'age ограничен @Min' }
        ]
      },
      {
        id: 'sv5',
        title: 'Ответ 400 при ошибке',
        difficulty: 'Среднее',
        theory:
          'Обработчик может вернуть конкретный код и тело. `ResponseEntity.badRequest().body(...)` отдаёт 400 с сообщением об ошибке.',
        task: 'В `@RestControllerAdvice` добавь `@ExceptionHandler(IllegalArgumentException.class)`, возвращающий `ResponseEntity.badRequest().body(e.getMessage())`.',
        starter: `import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class ErrorHandler {
    // поймай IllegalArgumentException и верни 400 с сообщением
}`,
        solution: `import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
public class ErrorHandler {

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handle(IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}`,
        hints: ['@ExceptionHandler(IllegalArgumentException.class)', 'ResponseEntity.badRequest().body(e.getMessage())'],
        checks: [
          { type: 'contains', value: '@ExceptionHandler', message: 'Есть @ExceptionHandler' },
          { type: 'contains', value: 'IllegalArgumentException', message: 'Обрабатывается IllegalArgumentException' },
          { type: 'contains', value: 'badRequest()', message: 'Возвращается 400 через badRequest' }
        ]
      }
    ]
  },

  // ─────────────────────── HIBERNATE / JPA ───────────────────────
  {
    id: 'jpa-entities',
    area: 'Hibernate / JPA',
    title: 'Сущности и маппинг',
    subtitle: 'Классы → таблицы',
    icon: 'Database',
    color: '#38bdf8',
    tasks: [
      {
        id: 'je1',
        title: 'Сущность (Entity)',
        difficulty: 'Лёгкое',
        theory:
          '`@Entity` превращает класс в таблицу. `@Id` — первичный ключ, `@GeneratedValue` — автогенерация значения.',
        task: 'Создай сущность `Product` с `id` (`@Id`, автогенерация) и полем `name` (String).',
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
        hints: ['@Entity над классом', '@Id + @GeneratedValue(strategy = GenerationType.IDENTITY) над id'],
        checks: [
          { type: 'contains', value: '@Entity', message: 'Класс помечен @Entity' },
          { type: 'contains', value: '@Id', message: 'Есть первичный ключ @Id' },
          { type: 'contains', value: '@GeneratedValue', message: 'Настроена автогенерация' },
          { type: 'regex', value: '(Long|long|Integer|int)\\s+id', message: 'Объявлено поле id' }
        ]
      },
      {
        id: 'je2',
        title: 'Ограничения столбцов',
        difficulty: 'Лёгкое',
        theory:
          '`@Column` настраивает столбец: `nullable = false` — обязательное, `unique = true` — уникальное, `length` — длина.',
        task: 'В сущности `Account` сделай поле `email` обязательным и уникальным через `@Column`.',
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
        hints: ['@Column(nullable = false, unique = true)'],
        checks: [
          { type: 'contains', value: '@Column', message: 'Используется @Column' },
          { type: 'contains', value: 'nullable = false', message: 'Поле обязательное' },
          { type: 'contains', value: 'unique = true', message: 'Поле уникальное' }
        ]
      },
      {
        id: 'je3',
        title: 'Имя таблицы',
        difficulty: 'Лёгкое',
        theory:
          'По умолчанию имя таблицы совпадает с классом. `@Table(name = "...")` задаёт своё имя — например `users` вместо `user` (зарезервированное слово).',
        task: 'Привяжи сущность `User` к таблице `users` через `@Table`.',
        starter: `import jakarta.persistence.*;

@Entity
// укажи таблицу users
public class User {
    @Id @GeneratedValue
    private Long id;
}`,
        solution: `import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id @GeneratedValue
    private Long id;
}`,
        hints: ['@Table(name = "users") над классом'],
        checks: [
          { type: 'contains', value: '@Table', message: 'Используется @Table' },
          { type: 'contains', value: 'name = "users"', message: 'Имя таблицы — users' }
        ]
      },
      {
        id: 'je4',
        title: 'Хранение enum',
        difficulty: 'Среднее',
        theory:
          'Поле-`enum` по умолчанию хранится как число (хрупко). `@Enumerated(EnumType.STRING)` сохраняет его как строку — читаемо и устойчиво к перестановкам.',
        task: 'В сущности `Order` пометь поле `status` (тип `Status`) как `@Enumerated(EnumType.STRING)`.',
        starter: `import jakarta.persistence.*;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    // храни status как строку
    private Status status;
}

enum Status { NEW, PAID }`,
        solution: `import jakarta.persistence.*;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    @Enumerated(EnumType.STRING)
    private Status status;
}

enum Status { NEW, PAID }`,
        hints: ['@Enumerated(EnumType.STRING) над полем status'],
        checks: [
          { type: 'contains', value: '@Enumerated', message: 'Используется @Enumerated' },
          { type: 'contains', value: 'EnumType.STRING', message: 'enum хранится как строка' }
        ]
      },
      {
        id: 'je5',
        title: 'Непостоянное поле',
        difficulty: 'Лёгкое',
        theory:
          '`@Transient` помечает поле, которое **не** надо сохранять в БД — например вычисляемое значение.',
        task: 'В сущности `Product` пометь вычисляемое поле `priceWithTax` как `@Transient`.',
        starter: `import jakarta.persistence.*;

@Entity
public class Product {
    @Id @GeneratedValue
    private Long id;

    private int price;

    // не сохранять в БД
    private int priceWithTax;
}`,
        solution: `import jakarta.persistence.*;

@Entity
public class Product {
    @Id @GeneratedValue
    private Long id;

    private int price;

    @Transient
    private int priceWithTax;
}`,
        hints: ['@Transient над priceWithTax'],
        checks: [
          { type: 'contains', value: '@Transient', message: 'Поле помечено @Transient' }
        ]
      }
    ]
  },
  {
    id: 'jpa-relations',
    area: 'Hibernate / JPA',
    title: 'Связи между сущностями',
    subtitle: 'Отношения таблиц',
    icon: 'Link2',
    color: '#0ea5e9',
    tasks: [
      {
        id: 'jr1',
        title: 'One-to-Many / Many-to-One',
        difficulty: 'Среднее',
        theory:
          'Связи: `@OneToMany` на стороне «один» и `@ManyToOne` на стороне «многие». `mappedBy` указывает поле-владельца связи.',
        task: 'У `Order` список `items` (`@OneToMany(mappedBy = "order")`), у `Item` поле `order` (`@ManyToOne`).',
        starter: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    // список позиций (один-ко-многим)
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
        hints: ['@OneToMany(mappedBy = "order") над List<Item>', '@ManyToOne над Order order'],
        checks: [
          { type: 'contains', value: '@OneToMany', message: 'Есть @OneToMany' },
          { type: 'contains', value: 'mappedBy', message: 'Указан mappedBy' },
          { type: 'contains', value: '@ManyToOne', message: 'Есть @ManyToOne' },
          { type: 'regex', value: 'List\\s*<\\s*Item\\s*>', message: 'Коллекция List<Item>' }
        ]
      },
      {
        id: 'jr2',
        title: 'Many-to-Many',
        difficulty: 'Среднее',
        theory:
          'Связь многие-ко-многим (`@ManyToMany`) хранится в отдельной таблице связей. У студента много курсов, у курса — много студентов.',
        task: 'У `Student` добавь поле `courses` — `List<Course>` со связью `@ManyToMany`.',
        starter: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Student {
    @Id @GeneratedValue
    private Long id;

    // many-to-many: курсы
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
        hints: ['@ManyToMany над полем', 'private List<Course> courses;'],
        checks: [
          { type: 'contains', value: '@ManyToMany', message: 'Используется @ManyToMany' },
          { type: 'regex', value: 'List\\s*<\\s*Course\\s*>', message: 'Список курсов List<Course>' }
        ]
      },
      {
        id: 'jr3',
        title: 'One-to-One',
        difficulty: 'Лёгкое',
        theory:
          'Связь один-к-одному (`@OneToOne`) соединяет две сущности, например `User` и его `Profile`.',
        task: 'У `User` добавь поле `profile` типа `Profile` со связью `@OneToOne`.',
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
        hints: ['@OneToOne над полем', 'private Profile profile;'],
        checks: [
          { type: 'contains', value: '@OneToOne', message: 'Используется @OneToOne' },
          { type: 'regex', value: 'Profile\\s+profile', message: 'Объявлено поле profile' }
        ]
      },
      {
        id: 'jr4',
        title: 'Fetch-типы и N+1',
        difficulty: 'Среднее',
        theory:
          'По умолчанию `@ManyToOne` грузится **EAGER** (сразу), коллекции — **LAZY**. Лишние EAGER и обращения к LAZY в цикле дают проблему **N+1 запросов**. Управляй через `fetch = FetchType.LAZY`.',
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
        hints: ['@ManyToOne(fetch = FetchType.LAZY)'],
        checks: [
          { type: 'contains', value: '@ManyToOne', message: 'Есть @ManyToOne' },
          { type: 'contains', value: 'FetchType.LAZY', message: 'Связь ленивая (LAZY)' }
        ]
      },
      {
        id: 'jr5',
        title: 'Каскады и orphanRemoval',
        difficulty: 'Среднее',
        theory:
          '`cascade = CascadeType.ALL` распространяет операции на дочерние сущности. `orphanRemoval = true` удаляет элемент, убранный из коллекции.',
        task: 'У `Order` коллекция `items` должна иметь `@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)`.',
        starter: `import jakarta.persistence.*;
import java.util.List;

@Entity
public class Order {
    @Id @GeneratedValue
    private Long id;

    // каскад + удаление сирот
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
        hints: ['@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)'],
        checks: [
          { type: 'contains', value: '@OneToMany', message: 'Есть @OneToMany' },
          { type: 'contains', value: 'CascadeType.ALL', message: 'Настроен каскад' },
          { type: 'contains', value: 'orphanRemoval = true', message: 'Включён orphanRemoval' }
        ]
      }
    ]
  },
  {
    id: 'jpa-repositories',
    area: 'Hibernate / JPA',
    title: 'Репозитории и запросы',
    subtitle: 'Доступ к данным',
    icon: 'Search',
    color: '#06b6d4',
    tasks: [
      {
        id: 'jq1',
        title: 'Репозиторий',
        difficulty: 'Лёгкое',
        theory:
          'Spring Data сам реализует доступ к данным. Достаточно интерфейса, наследующего `JpaRepository<Сущность, ТипКлюча>` — методы save/findAll/findById/delete появятся автоматически.',
        task: 'Создай интерфейс `ProductRepository`, наследующий `JpaRepository` для `Product` с ключом `Long`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;

// объяви репозиторий для Product
`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}`,
        hints: ['Это interface', 'extends JpaRepository<Product, Long>'],
        checks: [
          { type: 'regex', value: 'interface\\s+ProductRepository', message: 'Объявлен интерфейс ProductRepository' },
          { type: 'regex', value: 'extends\\s+JpaRepository', message: 'Наследует JpaRepository' },
          { type: 'regex', value: 'JpaRepository\\s*<\\s*Product\\s*,\\s*Long\\s*>', message: 'Указаны Product и Long' }
        ]
      },
      {
        id: 'jq2',
        title: 'Запросы: derived и @Query',
        difficulty: 'Среднее',
        theory:
          'Spring Data понимает имена методов: `findByName(...)` сгенерирует запрос сам. Для сложного — `@Query` с JPQL и именованным параметром `:price`.',
        task: 'В `ProductRepository` добавь `findByName(String name)` и метод с `@Query`, возвращающий товары дороже `:price`.',
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
        hints: ['List<Product> findByName(String name);', '@Query("SELECT p FROM Product p WHERE p.price > :price")'],
        checks: [
          { type: 'regex', value: 'findByName\\s*\\(\\s*String', message: 'Есть метод findByName' },
          { type: 'contains', value: '@Query', message: 'Используется @Query' },
          { type: 'contains', value: 'SELECT', message: 'В @Query есть JPQL' },
          { type: 'contains', value: ':price', message: 'Используется параметр :price' }
        ]
      },
      {
        id: 'jq3',
        title: 'Поиск и сортировка',
        difficulty: 'Среднее',
        theory:
          'По имени метода Spring строит запрос: `Containing` — подстрока, `IgnoreCase` — без регистра, `OrderBy...Desc` — сортировка.',
        task: 'Добавь метод `findByNameContainingIgnoreCaseOrderByIdDesc(String part)`, возвращающий `List<Product>`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // поиск по части имени без регистра, сортировка по id убыв.
}`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByNameContainingIgnoreCaseOrderByIdDesc(String part);
}`,
        hints: ['Containing — подстрока, IgnoreCase — без регистра, OrderByIdDesc — сортировка'],
        checks: [
          { type: 'contains', value: 'findByNameContaining', message: 'Поиск по части имени' },
          { type: 'contains', value: 'IgnoreCase', message: 'Без учёта регистра' },
          { type: 'contains', value: 'OrderById', message: 'Сортировка по id' }
        ]
      },
      {
        id: 'jq4',
        title: 'Проекции (DTO из запроса)',
        difficulty: 'Среднее',
        theory:
          'Чтобы не грузить всю сущность, репозиторий может возвращать **проекцию** — интерфейс с геттерами нужных полей. Spring сам подставит реализацию.',
        task: 'Объяви проекцию `NameOnly` с `getName()` и метод `findAllProjectedBy()`, возвращающий `List<NameOnly>`.',
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
        hints: ['Проекция — интерфейс с String getName();', 'List<NameOnly> findAllProjectedBy();'],
        checks: [
          { type: 'regex', value: 'interface\\s+NameOnly', message: 'Объявлена проекция NameOnly' },
          { type: 'regex', value: 'getName\\s*\\(', message: 'Есть геттер getName()' },
          { type: 'regex', value: 'List\\s*<\\s*NameOnly\\s*>', message: 'Метод возвращает List<NameOnly>' }
        ]
      },
      {
        id: 'jq5',
        title: 'Пагинация',
        difficulty: 'Среднее',
        theory:
          'Чтобы не отдавать тысячи записей сразу, используют постраничную выдачу. `findAll(Pageable)` возвращает `Page<T>` — страницу с данными и метаинформацией.',
        task: 'В `ProductService` добавь `page(Pageable pageable)`, возвращающий `Page<Product>` через `repository.findAll(pageable)`.',
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
        hints: ['Тип возврата: Page<Product>', 'return repository.findAll(pageable);'],
        checks: [
          { type: 'regex', value: 'Page\\s*<\\s*Product\\s*>', message: 'Метод возвращает Page<Product>' },
          { type: 'contains', value: 'Pageable', message: 'Принимается Pageable' },
          { type: 'contains', value: 'findAll(pageable)', message: 'Вызван findAll(pageable)' }
        ]
      },
      {
        id: 'jq6',
        title: 'Сервис с CRUD',
        difficulty: 'Среднее',
        theory:
          'Итоговая сборка: `@Service` использует репозиторий. `save()` создаёт/обновляет, `findById()` ищет, `deleteById()` удаляет. Зависимость — через конструктор.',
        task: 'Создай `ProductService` (`@Service`) с `ProductRepository` через конструктор и методами: `create` → `save`, `get` → `findById(...).orElse(null)`, `remove` → `deleteById`.',
        starter: `import org.springframework.stereotype.Service;

@Service
public class ProductService {
    private final ProductRepository repository;

    // конструктор + create / get / remove
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
        hints: ['Конструктор с ProductRepository', 'create → save, get → findById(id).orElse(null), remove → deleteById(id)'],
        checks: [
          { type: 'contains', value: '@Service', message: 'Класс помечен @Service' },
          { type: 'regex', value: 'public\\s+ProductService\\s*\\(\\s*ProductRepository', message: 'Внедрение через конструктор' },
          { type: 'contains', value: 'repository.save(', message: 'create использует save()' },
          { type: 'contains', value: 'findById(', message: 'get использует findById()' },
          { type: 'contains', value: 'deleteById(', message: 'remove использует deleteById()' }
        ]
      }
    ]
  },

  // ───────────────────────────── ПРОЕКТ ─────────────────────────────
  {
    id: 'capstone',
    area: 'Проект',
    title: 'Проект: Notes API',
    subtitle: 'Собираем всё вместе',
    icon: 'Rocket',
    color: '#a855f7',
    isProject: true,
    tasks: [
      {
        id: 'cap1',
        title: 'Шаг 1. Сущность Note',
        difficulty: 'Лёгкое',
        theory:
          'Собираем настоящее REST-приложение — **API заметок**. Слои: сущность → репозиторий → сервис → контроллер. Начнём с сущности `Note`.\n\nЗависимости (Maven): `spring-boot-starter-web`, `spring-boot-starter-data-jpa`, `spring-boot-starter-validation`, `h2`.',
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
        hints: ['@Entity над классом', '@Id @GeneratedValue над id', 'Поля title, content (String), done (boolean)'],
        checks: [
          { type: 'contains', value: '@Entity', message: 'Класс помечен @Entity' },
          { type: 'contains', value: '@Id', message: 'Есть @Id' },
          { type: 'contains', value: '@GeneratedValue', message: 'Настроена автогенерация' },
          { type: 'regex', value: 'String\\s+title', message: 'Есть поле title' },
          { type: 'regex', value: 'boolean\\s+done', message: 'Есть поле done' }
        ]
      },
      {
        id: 'cap2',
        title: 'Шаг 2. Репозиторий',
        difficulty: 'Лёгкое',
        theory:
          'Доступ к данным — через `JpaRepository`. Помимо готовых CRUD добавим производный метод по статусу.',
        task: 'Создай `NoteRepository extends JpaRepository<Note, Long>` с методом `findByDone(boolean done)` → `List<Note>`.',
        starter: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

// репозиторий для Note
`,
        solution: `import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NoteRepository extends JpaRepository<Note, Long> {
    List<Note> findByDone(boolean done);
}`,
        hints: ['interface NoteRepository extends JpaRepository<Note, Long>', 'List<Note> findByDone(boolean done);'],
        checks: [
          { type: 'regex', value: 'interface\\s+NoteRepository', message: 'Объявлен интерфейс NoteRepository' },
          { type: 'regex', value: 'JpaRepository\\s*<\\s*Note\\s*,\\s*Long\\s*>', message: 'Наследует JpaRepository<Note, Long>' },
          { type: 'contains', value: 'findByDone', message: 'Есть поиск по статусу' }
        ]
      },
      {
        id: 'cap3',
        title: 'Шаг 3. Исключение 404',
        difficulty: 'Лёгкое',
        theory:
          'Если заметка не найдена — вернём 404. Заведём своё исключение с `@ResponseStatus`.',
        task: 'Создай `NoteNotFoundException extends RuntimeException` с `@ResponseStatus(HttpStatus.NOT_FOUND)`.',
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
        hints: ['@ResponseStatus(HttpStatus.NOT_FOUND) над классом'],
        checks: [
          { type: 'contains', value: '@ResponseStatus', message: 'Используется @ResponseStatus' },
          { type: 'contains', value: 'HttpStatus.NOT_FOUND', message: 'Код 404' },
          { type: 'regex', value: 'extends\\s+RuntimeException', message: 'Наследует RuntimeException' }
        ]
      },
      {
        id: 'cap4',
        title: 'Шаг 4. DTO с валидацией',
        difficulty: 'Среднее',
        theory: 'Входные данные принимаем через DTO и валидируем. Заголовок обязателен.',
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
        hints: ['@NotBlank над title', 'Добавь поле content (String)'],
        checks: [
          { type: 'contains', value: 'class NoteDto', message: 'Объявлен класс NoteDto' },
          { type: 'contains', value: '@NotBlank', message: 'title помечен @NotBlank' },
          { type: 'regex', value: 'String\\s+title', message: 'Есть поле title' },
          { type: 'regex', value: 'String\\s+content', message: 'Есть поле content' }
        ]
      },
      {
        id: 'cap5',
        title: 'Шаг 5. Сервис (CRUD)',
        difficulty: 'Среднее',
        theory:
          'Бизнес-логика — в `@Service`. Репозиторий внедряем через конструктор. При отсутствии заметки бросаем исключение из шага 3.',
        task: 'Создай `NoteService` (`@Service`) с `NoteRepository`. Методы: `all()` → `findAll()`, `get(Long id)` → `findById(id).orElseThrow(NoteNotFoundException::new)`, `create(Note note)` → `save(note)`, `delete(Long id)` → `deleteById(id)`.',
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
        hints: ['Конструктор с NoteRepository', 'get: findById(id).orElseThrow(NoteNotFoundException::new)', 'create → save, delete → deleteById'],
        checks: [
          { type: 'contains', value: '@Service', message: 'Класс помечен @Service' },
          { type: 'regex', value: 'public\\s+NoteService\\s*\\(\\s*NoteRepository', message: 'Внедрение через конструктор' },
          { type: 'contains', value: 'findAll(', message: 'all() использует findAll' },
          { type: 'contains', value: 'orElseThrow', message: 'get() бросает исключение' },
          { type: 'contains', value: 'save(', message: 'create() использует save' },
          { type: 'contains', value: 'deleteById(', message: 'delete() использует deleteById' }
        ]
      },
      {
        id: 'cap6',
        title: 'Шаг 6. REST-контроллер',
        difficulty: 'Среднее',
        theory:
          'Контроллер связывает HTTP с сервисом. Базовый путь — `/api/notes`. Тело POST валидируем `@Valid`.',
        task: 'Создай `NoteController` (`@RestController`, `@RequestMapping("/api/notes")`): GET список, GET `/{id}`, POST с `@Valid @RequestBody`, DELETE `/{id}`.',
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

    // GET список, GET /{id}, POST, DELETE /{id}
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
        hints: ['@GetMapping → service.all()', '@GetMapping("/{id}") + @PathVariable', '@PostMapping + @Valid @RequestBody', '@DeleteMapping("/{id}")'],
        checks: [
          { type: 'contains', value: '@RestController', message: 'Класс помечен @RestController' },
          { type: 'contains', value: '/api/notes', message: 'Базовый путь /api/notes' },
          { type: 'contains', value: '@GetMapping', message: 'Есть GET-методы' },
          { type: 'contains', value: '@PostMapping', message: 'Есть POST-метод' },
          { type: 'contains', value: '@DeleteMapping', message: 'Есть DELETE-метод' },
          { type: 'contains', value: '@PathVariable', message: 'id через @PathVariable' }
        ]
      },
      {
        id: 'cap7',
        title: 'Шаг 7. Конфигурация и запуск',
        difficulty: 'Лёгкое',
        theory:
          'Последний штрих — `application.properties` с встроенной БД H2. После этого приложение запускается `mvn spring-boot:run`, а API доступно на `http://localhost:8080/api/notes`.',
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
        hints: ['URL базы в памяти: jdbc:h2:mem:notes', 'spring.jpa.hibernate.ddl-auto=update'],
        checks: [
          { type: 'contains', value: 'spring.datasource.url', message: 'Указан URL источника данных' },
          { type: 'contains', value: 'jdbc:h2:mem', message: 'Используется H2 в памяти' },
          { type: 'contains', value: 'ddl-auto=update', message: 'Схема обновляется' }
        ]
      }
    ]
  }
]

// Плоский список всех заданий + удобные индексы
export const allTasks = modules.flatMap((m) =>
  m.tasks.map((t) => ({ ...t, moduleId: m.id, moduleTitle: m.title, moduleColor: m.color, area: m.area }))
)

export function totalTaskCount() {
  return allTasks.length
}
