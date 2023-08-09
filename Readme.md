# Приложение для просмотра отчётов акций фондового рынка

## API

Запрос данных осуществляется к серверу IEX Cloud

Описание API: https://iexcloud.io/docs/api

Базовый URL для запроса: https://cloud.iexapis.com

## Параметры запроса:
- token - уникальный токен клиента
- collectionName - название запрашиваемой коллекции*

*названием коллекции может быть категория акций, название сектора экономики, либо тэг

### Название запрашиваемой коллекции

1. Категории акций перечилены в enum CollectionName и в описании API (ссылка выше)

2. Названия секторов экономики можно получить, выполнив GET запрос на https://cloud.iexapis.com/stable/ref-data/sectors
Пример запроса:
GET https://cloud.iexapis.com/stable/ref-data/sectors?token=pk_da03ec1ae5264b05bb2e9172e1ce3cba

3. Список возможных тегов можно получить, выполнив GET запрос на https://cloud.iexapis.com/stable/ref-data/tags
Пример запроса:
GET https://cloud.iexapis.com/stable/ref-data/tags?token=pk_da03ec1ae5264b05bb2e9172e1ce3cba
