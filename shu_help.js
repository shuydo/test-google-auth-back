
// https://console.cloud.google.com/projectselector2/apis/credentials?supportedpurview=project
// создать project (имя потом не сменить)
// OAuth consent screen - верификация акк. Нажать CREATE
// заполняем обяз.минимум - Save and Continue
// ADD or Remove Scopes. Минимум взять имя, ну и профиль("your non-sensitive...")- Save and Continue
// option info (test users) - можно пропустить
// Summary - на последок просмотреть, проверить и BACK to dashboard
// -------
// Credentials OAuth 2.0 Client IDs 
// +Create Credentials /OAuth
// Choice Web Application - push CREATE
// копируем ключи в .env (и здесь должно стать PORT=,BASE_URL=,FRONTEND_URL=,
// GOOGLE_CLIENT_ID=,GOOGLE_CLIENT_SECRET=)

// Cannot GET (получилось не сразу, ничего не делал и зашло)
// ------------------------
// https://enable-cors.org/server_expressjs.html