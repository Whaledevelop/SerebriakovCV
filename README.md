# SerebriakovCV

Интерактивное резюме на React, TypeScript и Vite.

## Установка

Для работы необходим Node.js.

Перейти в каталог проекта:

```powershell
cd D:\ReactProjects\SerebriakovCV
```

Установить зависимости:

```powershell
npm install
```

## Локальный запуск

Запустить сервер разработки:

```powershell
npm run dev
```

Открыть в браузере:

<http://localhost:5173/SerebriakovCV/>

Изменения в исходных файлах применяются автоматически. Чтобы остановить сервер, нажмите `Ctrl+C` в терминале.

## Проверка production-сборки

Собрать проект:

```powershell
npm run build
```

Запустить собранную версию локально:

```powershell
npm run preview
```

Открыть адрес, указанный Vite в терминале. По умолчанию:

<http://localhost:4173/SerebriakovCV/>

## Деплой

Собрать проект и опубликовать содержимое `dist` в ветку `gh-pages`:

```powershell
npm run deploy
```

Опубликованный сайт:

<https://whaledevelop.github.io/SerebriakovCV/>

Обновление GitHub Pages после деплоя может занять несколько минут.

## Редактирование контента

Заголовки, описания проектов, ссылки и изображения находятся в `src/content.json`.
