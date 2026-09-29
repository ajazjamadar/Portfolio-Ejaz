@echo off
echo ============================================================
echo Pushing portfolio to https://github.com/ajazjamadar/Portfolio-Ejaz.git
echo ============================================================
echo.
echo When prompted:
echo   - Username: ajazjamadar
echo   - Password: Paste your GitHub Personal Access Token (PAT)
echo.
"C:\Users\mdeja\AppData\Local\Programs\MinGit\cmd\git.exe" push -u origin main
echo.
pause
