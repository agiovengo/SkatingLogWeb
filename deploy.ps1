# Step 1: Build your Angular project
ng build --prod --base-href /SkatingLogWeb/

# Step 2: Create a new GitHub repository (already done)
# Step 3: Initialize Git and add remote origin (already done)

# Step 4: Commit and push the Angular project files
git add .
git commit -m "Initial commit"
git push -u origin master

# Step 5: Configure GitHub Pages
$repositoryUrl = "https://github.com/agiovengo/SkatingLogWeb.git"
$githubApiUrl = "https://api.github.com"
$githubPagesUrl = "$githubApiUrl/repos/agiovengo/SkatingLogWeb/pages"

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

Invoke-RestMethod -Uri "$githubApiUrl/repos/agiovengo/SkatingLogWeb/branches/main/protection" `
    -Method PUT -Headers $headers -Body ($branchProtectionBody | ConvertTo-Json)

$pagesBody = @{
    "source" = @{
        "branch" = "main"
        "path" = "/docs" # Change to the appropriate path if your project generates files in a different directory
    }
}

Invoke-RestMethod -Uri $githubPagesUrl -Method POST -Headers $headers -Body ($pagesBody | ConvertTo-Json)

# Step 6: Access your GitHub Pages site
$githubPagesSiteUrl = "https://agiovengo.github.io/SkatingLogWeb/"

Write-Host "Your Angular project is now hosted on GitHub Pages."
Write-Host "You can access your site at: $githubPagesSiteUrl"
Write-Host "Press any key to close this window..."
$null = $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyUp')
