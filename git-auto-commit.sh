#!/bin/bash

# Redirigir toda la salida al log
exec > /home/pi/cron.log 2>&1

# Cargar las variables de entorno del usuario
export HOME=/home/pi
export PATH=/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin

# Moverse al directorio del repositorio
cd /home/pi/Neo-Server || exit 1

# Configurar Git para evitar errores de identidad
git config --global user.name "V411UX"
git config --global user.email "V411UX@gmail.com"

# Agregar cambios y hacer commit
git add .
git commit -m "Auto-commit Raspberry Pi $(date)"
git push origin main
