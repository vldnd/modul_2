# git-config

git config --global user.name "vldnd"
git config --global user.email "vlasvdenis@yandex.ru"

git config --list # Посмотреть настройки

git config --global core.autocrlf true
git config --global core.quotepath off
git config --global core.safecrlf warn
git config --global init.defaultBranch main

git init # инициализация репозитория
git add . # добавить все файлы в track
git commit -m 'описание' # сделать коммит

git status # показыват текущий статус
git diff # показывает текущие изменения
git diff --color-gitwords # более развернуто

git checkout . # вернуться к последнему коммиту
git checkout 'название файла' #
