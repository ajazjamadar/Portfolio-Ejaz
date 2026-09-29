@echo off
setlocal
echo ============================================================
echo   GitHub Auto-Push: ajazjamadar/Portfolio-Ejaz
echo ============================================================
echo.
echo Step 1: Connecting your GitHub account...
echo (A browser window will open to confirm login)
echo.
"C:\Program Files\GitHub CLI\gh.exe" auth login --web --clipboard -p https -h github.com
echo.
echo Step 2: Configuring Git credentials...
"C:\Program Files\GitHub CLI\gh.exe" auth setup-git
echo.
echo Step 3: Pushing portfolio to https://github.com/ajazjamadar/Portfolio-Ejaz.git ...
"C:\Users\mdeja\AppData\Local\Programs\MinGit\cmd\git.exe" branch -M main
"C:\Users\mdeja\AppData\Local\Programs\MinGit\cmd\git.exe" push -u origin main
echo.
echo ============================================================
echo   Done! Your portfolio is live on GitHub!
echo ============================================================
pause
