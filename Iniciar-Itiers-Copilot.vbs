' ===================================================
' Lanzador silencioso de Itiers AI Copilot
' Ejecuta el asistente como app de escritorio sin terminal
' ===================================================
Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
strPath = fso.GetParentFolderName(WScript.ScriptFullName)

' Cambiar al directorio del proyecto y ejecutar pythonw (sin ventana de consola)
WshShell.CurrentDirectory = strPath
WshShell.Run "pythonw.exe itiers_copilot.py", 0, False

