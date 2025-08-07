# Azure DevOps PBI Colorifier

A browser extension that enhances the visual experience of Azure DevOps by adding custom colorization to Product Backlog Items (PBIs) and work items.

## Overview

This Chrome extension automatically modifies the appearance of work items in Azure DevOps, specifically changing the color of work items with a "Resolved" state to orange (`rgb(255, 157, 0)`) for better visual distinction and improved workflow management.

## Features

- **Automatic Color Customization**: Automatically detects and recolors "Resolved" work items with a distinctive orange color
- **Real-time Updates**: Uses DOM observation to apply colors dynamically as content loads or changes
- **Multi-platform Support**: Works across different Azure DevOps instances including:
  - Visual Studio Online (`*.visualstudio.com`)
  - Azure DevOps (`dev.azure.com`)
  - Custom/Enterprise instances

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `src` folder of this project
5. The extension will be installed and active on supported Azure DevOps sites

## How It Works

The extension uses a content script that:
1. Scans for work item state elements on Azure DevOps pages
2. Identifies items with "Resolved" status
3. Applies custom orange coloring to the state indicators
4. Monitors for DOM changes to handle dynamically loaded content

## File Structure

```
src/
├── manifest.json    # Extension configuration and permissions
└── content.js       # Main logic for work item colorization
```

## Browser Compatibility

- Chrome (Manifest V3)
- Other Chromium-based browsers

## Privacy

This extension prioritizes user privacy and operates with minimal data interaction. For detailed information about data handling and privacy practices, please see our [Privacy Policy](PRIVACY_POLICY.md).

## Contributing

Feel free to submit issues and enhancement requests. Pull requests are welcome for improvements and additional color customizations.

## License

This project is open source. Please check the license file for more details.