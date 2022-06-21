# Кейс: платформа голосования

**Обзор и назначение системы/продукта**
Есть идея в качестве baby blockchain создать платформу голосования, пользователи которой это граждане Украины и только.
Назначением системы является укрепление социологии внутри государства.
То есть, выборы президента, поддержка законопроекта, петиции и т.п., для всего этого есть повод
создания распределенной системы.
Необходимость создания распределенной системы заключается в недоверии участников результатам централизованного голосования,
т.к. результаты централизованных систем подвержены искажению, неверного подсчета голосов, диверсиям и т.п.  

**Содержание системы**
Система должна содержать данные об участниках, сохраняя их приватность, но при этом иметь возможность провести 
аудит голосования. Для того чтобы участниками являлись только граждане Украины системе необходим модуль
взаимодействия с центральными реестрами государства, как это было сделано в приложении "Дія".
Также система должна содержать механизм транзакций: их создание, верификация, валидация и подтверждение, для
выполнения основной задачи в процессах голосования (определенный голос это транзакция).
Еще необходим модуль синхронизации актуального состояния для актуализации данных во всех базах данных участников.
А также необходим модуль аккаунта пользователя, аккаунт должен быть прикреплен за пользователем в центрах МВС. Ну скорее всего :)

**Взаимодействие продукта**
Каждый узел продукта взаимодействует с другим. Но, также
продукт должен взаимодействовать с центрами структур ~~власти~~слуг народа :)
Взаимодействие необходимо для отсеивания граждан других государств, 
чтобы участниками системы были только граждане Украины.

**Функции продукта**
Продукт должен исполнять несколько функций: существовать без центра принятий решений, быть прозрачным для
всех граждан Украины, доступным для проведения аудита и при этом обеспечивать более высокий уровень приватности пользователей.
Еще организовать хранение и синхронизацию данных среди сторон, которые не доверяют друг другу.

**Требования к безопасности**
Необходимо обеспечить проверку целостности данных (database integrity verification) для защиты от атак 
нацеленных на попытки изменить данные. Это обеспечивается технологией blockchain, в цепочке блоков которой
каждый следующий блок содержит хэш-значение от предыдущего. Все попытки изменить данные влекут изменения 
на всех последующих уровнях и будут замечены остальными участниками системы.
Также каждый участник должен иметь ключевую пару, приватный ключ из которой будет являться секретом пользователя.

**Характеристики пользователей**
Пользователь системы это гражданин Украины и только. 
Пользователь может выполнять роль как просто участника системы (голосовать), так и валидатора, инициатора петиции или голосования.

**Ограничения**
Приватность: необходимость хранить все транзакции в общей базе данных,
но не раскрывать чувствительную информацию является сложной задачей распределенной системы.
Производительность: необходимость справляться с обработкой большого потока транзакций с необходимостью
синхронизации валидаторов которая занимает время.
Ответственность: определить виновного в случае конфликта или ошибки также является сложностью.