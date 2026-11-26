@echo off
setlocal
cd /d "%~dp0"
title GrimStudio 2.5.2 Windows Build
color 0B

echo ===================================================
echo             GrimStudio 2.5.2 Build
echo ===================================================
echo.
echo Node.js 20+ is required only for building this project.
echo The installed app does not require Node.js.
echo.
where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js is not installed or is not on PATH.
  echo Install Node.js 20 or newer, then reopen this script.
  pause
  exit /b 1
)
node -e "process.exit(Number(process.versions.node.split('.')[0]) >= 20 ? 0 : 1)"
if errorlevel 1 (
  echo ERROR: Node.js 20 or newer is required.
  echo Please update Node.js and run this script again.
  pause
  exit /b 1
)
where npm >nul 2>nul
if errorlevel 1 (
  echo ERROR: npm is missing. Repair your Node.js installation.
  pause
  exit /b 1
)
echo [1/4] Checking project package files...
if not exist package.json (
  echo ERROR: package.json was not found in this folder.
  pause
  exit /b 1
)
echo [2/4] Installing dependencies...
call npm install --no-audit --no-fund
if errorlevel 1 (
  echo ERROR: npm dependency installation failed.
  echo Check your internet connection, disk space, and npm output above.
  pause
  exit /b 1
)
echo [3/4] Running project smoke tests...
call npm test
if errorlevel 1 (
  echo ERROR: Smoke tests failed; packaging is canceled.
  pause
  exit /b 1
)
echo [4/4] Building Windows x64 installer and portable executable...
call npm run dist
if errorlevel 1 (
  echo ERROR: Packaging failed. Review the output above.
  pause
  exit /b 1
)
echo.
echo BUILD SUCCESSFUL!
echo Output files are located in:
echo %CD%\dist
if exist dist explorer "%CD%\dist"
pause
