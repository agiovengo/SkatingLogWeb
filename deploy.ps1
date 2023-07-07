# Step 1: Build your Angular project
ng build --base-href /skating-log-web/

# Step 2: Create a new GitHub repository (already done)
# Step 3: Initialize Git and add remote origin (already done)
# Step 4: Push your project to GitHub (already done)

# Step 5: Configure GitHub Pages
$repositoryUrl = "https://github.com/agiovengo/skating-log-web.git"
$githubApiUrl = "https://api.github.com"
$githubPagesUrl = "$githubApiUrl/repos/agiovengo/skating-log-web/pages"

$token = "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"
$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
}

$branchProtectionBody = @{
    "required_status_checks" = @{
        "strict" = $true
        "contexts" = @()
    }
    "enforce_admins" = $false
    "required_pull_request_reviews" = $null
    "restrictions" = $null
}

Invoke-RestMethod -Uri "$githubApiUrl/repos/agiovengo/skating-log-web/branches/main/protection" `
    -Method PUT -Headers $headers -Body ($branchProtectionBody | ConvertTo-Json)

# Step 6: Access your GitHub Pages site
$githubPagesSiteUrl = "https://agiovengo.github.io/skating-log-web/"

Write-Host "Your Angular project is now hosted on GitHub Pages."
Write-Host "You can access your site at: $githubPagesSiteUrl"
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyUp')
