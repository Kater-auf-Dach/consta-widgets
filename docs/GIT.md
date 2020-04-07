# Правила работы с git и github

## Оформление commits и Pull Requests

Описание коммитов и PRs следует делать на русском языке.

В качестве заголовка коммита нужно использовать номер задачи + заголовок задачи. Самый простой способ получить правильно сформированный заголовок - нажать на данную кнопку:

![](https://s.csssr.ru/U07B23NE8/2020-01-27_15-31-52_wxlxb.jpg)

В теле коммита должно быть описание того, что было сделано в рамках данного коммита. Решение одной задачи может быть разбито на несколько коммитов, при этом каждый коммит должен содержать одно атомарное изменение (не должно быть коммитов с промежуточным/нерабочим состоянием).

Данный подход позволит быстро найти нужную информацию при помощи git blame, а так же найти связь конкретного изменения с конкретной задачей.

При оформлении Pull Request'a так же в качестве заголовка следует использовать номер задачи + заголовок задачи.

При внесении изменений в код PR'a промежуточные коммиты нужно сквошить при помощи интерактивного ребейза. Оставлять следует только те коммиты, в которых велась работа непосредственно над задачей (то есть коммиты, связанные с изменениями в бизнес-логике, необходимыми для выполнения задачи).

## Сопровождение Pull Request'a

Автор PR'a должен сам следить за тем, чтобы PR не "подвисал" на этапе ревью. Если такое происходит, то необходимо попросить разработчиков посмотреть PR.

Если по вашему PR были оставлены change requests или вопросы, то необходимо внести соответствующие изменении или объяснять почему они не нужны. После этого следует так же написать тем разработчикам, которые оставляли вопросы/change requets, чтобы они снова посмотрели внесенные вами изменения. Кнопку повторного запроса ревью в github нажимать не нужно, так как из-за этого не сразу видно, что по PRs были замечания и от кого конкретно они были.

Если по вашему PR запросили изменения и вы начинаете над ними работу, добавьте в начало названия PR-а [WIP]. После того, как исправили замечания, [WIP] нужно убрать.

Если откликаетесь на просьбу поревьюить PR (сообщение с меншеном), поставьте под сообщением смайлик с глазами :eyes:, чтобы команде было видно, что PR кто-то смотрит.

Если при ревью вы оставили замечания к PR, то после исправлений автора следует проверить статус замечаний. При успешном исправлении замечаний и отстутсвии дополнительных требований у ревьювера, ревьюверу необходимо "зарезолвить" замечания.

После получения 2 апрувов PR следует вмержить. Мержит тот, кто сделал последний апрув или автор PR'a, если, например, ревьюер не может вмержить PR сразу (еще не прошли тесты) или ревьюер забыл вмержить PR.