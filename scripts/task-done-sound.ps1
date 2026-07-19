try {
  Add-Type -AssemblyName System.Windows.Forms -ErrorAction SilentlyContinue
  [System.Media.SystemSounds]::Asterisk.Play()
} catch {
  try {
    [Console]::Beep(880, 160)
    [Console]::Beep(1175, 180)
  } catch {
    Write-Host "`a"
  }
}
