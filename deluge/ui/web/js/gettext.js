## -*- coding: utf-8 -*-
/*
 * Script: gettext.js
 *  A script file that is run through the template renderer in order for
 *  translated strings to be used.
 *
 * Copyright:
 *  (c) 2009 Damien Churchill <damoxc@gmail.com>
 */

GetText = {
    maps: {},
    add: function(string, translation) {
        this.maps[string] = translation;
    },
    get: function(string) {
        if (this.maps[string]) {
            return this.maps[string];
        } else {
            return string;
        }
    }
}

function _(string) {
    return GetText.get(string);
}

// TorrentGrid.js:109
GetText.add('#', '${escape(_("#"))}')

// DetailsTab.js:50
GetText.add('# of files', '${escape(_("# of files"))}')

// Menus.js:166
GetText.add('0', '${escape(_("0"))}')

// Menus.js:168
GetText.add('1', '${escape(_("1"))}')

// Menus.js:111, Menus.js:130
GetText.add('10 KiB/s', '${escape(_("10 KiB/s"))}')

// Menus.js:149
GetText.add('100', '${escape(_("100"))}')

// Menus.js:170
GetText.add('2', '${escape(_("2"))}')

// Menus.js:151
GetText.add('200', '${escape(_("200"))}')

// Menus.js:172
GetText.add('3', '${escape(_("3"))}')

// Menus.js:113, Menus.js:132
GetText.add('30 KiB/s', '${escape(_("30 KiB/s"))}')

// Menus.js:153
GetText.add('300', '${escape(_("300"))}')

// Menus.js:117, Menus.js:136
GetText.add('300 KiB/s', '${escape(_("300 KiB/s"))}')

// Menus.js:174
GetText.add('5', '${escape(_("5"))}')

// Menus.js:109, Menus.js:128
GetText.add('5 KiB/s', '${escape(_("5 KiB/s"))}')

// Menus.js:147
GetText.add('50', '${escape(_("50"))}')

// Menus.js:155
GetText.add('500', '${escape(_("500"))}')

// Menus.js:115, Menus.js:134
GetText.add('80 KiB/s', '${escape(_("80 KiB/s"))}')

// QueuePage.js:69
GetText.add('Active Torrents', '${escape(_("Active Torrents"))}')

// EditTrackersWindow.js:112, ConnectionManager.js:100, AddConnectionWindow.js:56, Toolbar.js:58, AddTrackerWindow.js:57, UrlWindow.js:50, FileWindow.js:53, AddWindow.js:52
GetText.add('Add', '${escape(_("Add"))}')

// AddConnectionWindow.js:40
GetText.add('Add Connection', '${escape(_("Add Connection"))}')

// OptionsTab.js:143
GetText.add('Add In Paused State', '${escape(_("Add In Paused State"))}')

// AddWindow.js:37
GetText.add('Add Torrents', '${escape(_("Add Torrents"))}')

// AddTrackerWindow.js:40
GetText.add('Add Tracker', '${escape(_("Add Tracker"))}')

// FileWindow.js:40
GetText.add('Add from File', '${escape(_("Add from File"))}')

// UrlWindow.js:36
GetText.add('Add from Url', '${escape(_("Add from Url"))}')

// DownloadsPage.js:115
GetText.add('Add torrents in Paused state', '${escape(_("Add torrents in Paused state"))}')

// TorrentGrid.js:180
GetText.add('Added', '${escape(_("Added"))}')

// FilterPanel.js:124
GetText.add('All', '${escape(_("All"))}')

// DaemonPage.js:77
GetText.add('Allow Remote Connections', '${escape(_("Allow Remote Connections"))}')

// InterfacePage.js:78
GetText.add('Allow the use of multiple filters at once', '${escape(_("Allow the use of multiple filters at once"))}')

// StatusTab.js:123
GetText.add('Announce OK', '${escape(_("Announce OK"))}')

// StatusTab.js:124
GetText.add('Announce Sent', '${escape(_("Announce Sent"))}')

// OptionsTab.js:347, PreferencesWindow.js:107
GetText.add('Apply', '${escape(_("Apply"))}')

// Menus.js:181, OptionsTab.js:215
GetText.add('Auto Managed', '${escape(_("Auto Managed"))}')

// TorrentGrid.js:173
GetText.add('Avail', '${escape(_("Avail"))}')

// FileBrowser.js:47
GetText.add('Back', '${escape(_("Back"))}')

// OptionsTab.js:88, OptionsTab.js:94, BandwidthPage.js:42
GetText.add('Bandwidth', '${escape(_("Bandwidth"))}')

// OtherPage.js:66
GetText.add('Be alerted about new releases', '${escape(_("Be alerted about new releases"))}')

// Menus.js:210
GetText.add('Bottom', '${escape(_("Bottom"))}')

// MoveStorage.js:73, FileWindow.js:70, InstallPluginWindow.js:69
GetText.add('Browse', '${escape(_("Browse"))}')

// CachePage.js:41
GetText.add('Cache', '${escape(_("Cache"))}')

// CachePage.js:69
GetText.add('Cache Expiry (seconds)', '${escape(_("Cache Expiry (seconds)"))}')

// CachePage.js:63
GetText.add('Cache Size (16 KiB Blocks)', '${escape(_("Cache Size (16 KiB Blocks)"))}')

// EditTrackersWindow.js:56, OtherLimitWindow.js:72, RemoveWindow.js:55, MoveStorage.js:55, EditTrackerWindow.js:56, AddTrackerWindow.js:56, AddWindow.js:51
GetText.add('Cancel', '${escape(_("Cancel"))}')

// PreferencesWindow.js:85
GetText.add('Categories', '${escape(_("Categories"))}')

// InterfacePage.js:173
GetText.add('Certificate', '${escape(_("Certificate"))}')

// InterfacePage.js:117
GetText.add('Change', '${escape(_("Change"))}')

// InterfacePage.js:224
GetText.add('Change Successful', '${escape(_("Change Successful"))}')

// ConnectionManager.js:54, AddConnectionWindow.js:55, PreferencesWindow.js:106
GetText.add('Close', '${escape(_("Close"))}')

// DetailsTab.js:51
GetText.add('Comment', '${escape(_("Comment"))}')

// TorrentGrid.js:187
GetText.add('Complete Seen', '${escape(_("Complete Seen"))}')

// TorrentGrid.js:194
GetText.add('Completed', '${escape(_("Completed"))}')

// InterfacePage.js:105
GetText.add('Confirm Password', '${escape(_("Confirm Password"))}')

// ConnectionManager.js:55, ConnectionManager.js:184
GetText.add('Connect', '${escape(_("Connect"))}')

// ConnectionManager.js:177, ConnectionManager.js:225
GetText.add('Connected', '${escape(_("Connected"))}')

// Menus.js:142
GetText.add('Connection Limit', '${escape(_("Connection Limit"))}')

// ConnectionManager.js:43, Toolbar.js:100
GetText.add('Connection Manager', '${escape(_("Connection Manager"))}')

// UI.js:151
GetText.add('Connection restored', '${escape(_("Connection restored"))}')

// Statusbar.js:57, DaemonPage.js:68
GetText.add('Connections', '${escape(_("Connections"))}')

// UrlWindow.js:68
GetText.add('Cookies', '${escape(_("Cookies"))}')

// DownloadsPage.js:83
GetText.add('Copy of .torrent files to', '${escape(_("Copy of .torrent files to"))}')

// Toolbar.js:52
GetText.add('Create', '${escape(_("Create"))}')

// Menus.js:104
GetText.add('D/L Speed Limit', '${escape(_("D/L Speed Limit"))}')

// NetworkPage.js:214
GetText.add('DHT', '${escape(_("DHT"))}')

// Statusbar.js:210
GetText.add('DHT Nodes', '${escape(_("DHT Nodes"))}')

// DaemonPage.js:41
GetText.add('Daemon', '${escape(_("Daemon"))}')

// DaemonPage.js:57
GetText.add('Daemon port', '${escape(_("Daemon port"))}')

// Toolbar.js:45
GetText.add('Deluge', '${escape(_("Deluge"))}')

// DetailsTab.js:36
GetText.add('Details', '${escape(_("Details"))}')

// EncryptionPage.js:66, EncryptionPage.js:84
GetText.add('Disabled', '${escape(_("Disabled"))}')

// ConnectionManager.js:179
GetText.add('Disconnect', '${escape(_("Disconnect"))}')

// Menus.js:257, Deluge.js:156
GetText.add('Do Not Download', '${escape(_("Do Not Download"))}')

// QueuePage.js:107
GetText.add('Do not count slow torrents', '${escape(_("Do not count slow torrents"))}')

// EditTrackersWindow.js:107, Menus.js:204, Toolbar.js:89
GetText.add('Down', '${escape(_("Down"))}')

// TorrentGrid.js:256
GetText.add('Down Limit', '${escape(_("Down Limit"))}')

// TorrentGrid.js:148
GetText.add('Down Speed', '${escape(_("Down Speed"))}')

// FilesTab.js:63
GetText.add('Download', '${escape(_("Download"))}')

// OptionsTab.js:55
GetText.add('Download Location', '${escape(_("Download Location"))}')

// Statusbar.js:104
GetText.add('Download Speed', '${escape(_("Download Speed"))}')

// DownloadsPage.js:69
GetText.add('Download to', '${escape(_("Download to"))}')

// TorrentGrid.js:235
GetText.add('Downloaded', '${escape(_("Downloaded"))}')

// DownloadsPage.js:42
GetText.add('Downloads', '${escape(_("Downloads"))}')

// TorrentGrid.js:160
GetText.add('ETA', '${escape(_("ETA"))}')

// EditTrackersWindow.js:117
GetText.add('Edit', '${escape(_("Edit"))}')

// EditTrackerWindow.js:40
GetText.add('Edit Tracker', '${escape(_("Edit Tracker"))}')

// EditTrackersWindow.js:40, Menus.js:224, OptionsTab.js:332
GetText.add('Edit Trackers', '${escape(_("Edit Trackers"))}')

// EncryptionPage.js:102
GetText.add('Either', '${escape(_("Either"))}')

// EncryptionPage.js:65, EncryptionPage.js:83, PluginsPage.js:81
GetText.add('Enabled', '${escape(_("Enabled"))}')

// EncryptionPage.js:41
GetText.add('Encryption', '${escape(_("Encryption"))}')

// ConnectionManager.js:308, ConnectionManager.js:364, AddConnectionWindow.js:103, StatusTab.js:121, AddWindow.js:209
GetText.add('Error', '${escape(_("Error"))}')

// Menus.js:253
GetText.add('Expand All', '${escape(_("Expand All"))}')

// FileWindow.js:67, AddWindow.js:98
GetText.add('File', '${escape(_("File"))}')

// FileBrowser.js:36
GetText.add('File Browser', '${escape(_("File Browser"))}')

// FilesTab.js:40, FilesTab.js:50
GetText.add('Filename', '${escape(_("Filename"))}')

// FilesTab.js:35, FilesTab.js:41
GetText.add('Files', '${escape(_("Files"))}')

// Sidebar.js:55
GetText.add('Filters', '${escape(_("Filters"))}')

// PluginsPage.js:118
GetText.add('Find More', '${escape(_("Find More"))}')

// DownloadsPage.js:57
GetText.add('Folders', '${escape(_("Folders"))}')

// Menus.js:236
GetText.add('Force Recheck', '${escape(_("Force Recheck"))}')

// EncryptionPage.js:64, EncryptionPage.js:82
GetText.add('Forced', '${escape(_("Forced"))}')

// FileBrowser.js:50
GetText.add('Forward', '${escape(_("Forward"))}')

// Statusbar.js:216
GetText.add('Freespace in download location', '${escape(_("Freespace in download location"))}')

// EncryptionPage.js:101
GetText.add('Full Stream', '${escape(_("Full Stream"))}')

// OptionsTab.js:293, OptionsTab.js:124, QueuePage.js:52
GetText.add('General', '${escape(_("General"))}')

// OtherPage.js:97
GetText.add('GeoIP Database', '${escape(_("GeoIP Database"))}')

// BandwidthPage.js:56
GetText.add('Global Bandwidth Usage', '${escape(_("Global Bandwidth Usage"))}')

// ProxyField.js:60
GetText.add('HTTP', '${escape(_("HTTP"))}')

// ProxyField.js:61
GetText.add('HTTP Auth', '${escape(_("HTTP Auth"))}')

// EncryptionPage.js:100
GetText.add('Handshake', '${escape(_("Handshake"))}')

// DetailsTab.js:47
GetText.add('Hash', '${escape(_("Hash"))}')

// Toolbar.js:107
GetText.add('Help', '${escape(_("Help"))}')

// Menus.js:267, Deluge.js:158
GetText.add('High Priority', '${escape(_("High Priority"))}')

// Menus.js:272, Deluge.js:159
GetText.add('Highest Priority', '${escape(_("Highest Priority"))}')

// FileBrowser.js:56
GetText.add('Home', '${escape(_("Home"))}')

// ConnectionManager.js:74, AddConnectionWindow.js:66, ProxyI2PField.js:49
GetText.add('Host', '${escape(_("Host"))}')

// ProxyField.js:75
GetText.add('Host:', '${escape(_("Host:"))}')

// ProxyPage.js:59
GetText.add('I2P Proxy', '${escape(_("I2P Proxy"))}')

// BandwidthPage.js:122
GetText.add('Ignore limits on local network', '${escape(_("Ignore limits on local network"))}')

// NetworkPage.js:51
GetText.add('Incoming Address', '${escape(_("Incoming Address"))}')

// NetworkPage.js:67
GetText.add('Incoming Ports', '${escape(_("Incoming Ports"))}')

// EncryptionPage.js:57
GetText.add('Incoming:', '${escape(_("Incoming:"))}')

// PluginsPage.js:135
GetText.add('Info', '${escape(_("Info"))}')

// AddWindow.js:107
GetText.add('Infohash', '${escape(_("Infohash"))}')

// InstallPluginWindow.js:54, PluginsPage.js:113
GetText.add('Install', '${escape(_("Install"))}')

// InstallPluginWindow.js:40
GetText.add('Install Plugin', '${escape(_("Install Plugin"))}')

// InterfacePage.js:41, InterfacePage.js:53
GetText.add('Interface', '${escape(_("Interface"))}')

// InterfacePage.js:199
GetText.add('Invalid Password', '${escape(_("Invalid Password"))}')

// OptionsTab.js:114, OptionsTab.js:141
GetText.add('KiB/s', '${escape(_("KiB/s"))}')

// Statusbar.js:144, Statusbar.js:192
GetText.add('Kib/s', '${escape(_("Kib/s"))}')

// NetworkPage.js:208
GetText.add('LSD', '${escape(_("LSD"))}')

// EncryptionPage.js:93
GetText.add('Level:', '${escape(_("Level:"))}')

// StatusTab.js:61
GetText.add('Loading', '${escape(_("Loading"))}')

// MoveStorage.js:67, OtherPage.js:104
GetText.add('Location', '${escape(_("Location"))}')

// LoginWindow.js:45, LoginWindow.js:54
GetText.add('Login', '${escape(_("Login"))}')

// LoginWindow.js:130
GetText.add('Login Failed', '${escape(_("Login Failed"))}')

// Toolbar.js:114
GetText.add('Logout', '${escape(_("Logout"))}')

// OptionsTab.js:150, OptionsTab.js:113
GetText.add('Max Connections', '${escape(_("Max Connections"))}')

// OptionsTab.js:103
GetText.add('Max Down Speed', '${escape(_("Max Down Speed"))}')

// OptionsTab.js:97
GetText.add('Max Download Speed', '${escape(_("Max Download Speed"))}')

// OptionsTab.js:108
GetText.add('Max Up Speed', '${escape(_("Max Up Speed"))}')

// OptionsTab.js:173, OptionsTab.js:118
GetText.add('Max Upload Slots', '${escape(_("Max Upload Slots"))}')

// OptionsTab.js:123
GetText.add('Max Upload Speed', '${escape(_("Max Upload Speed"))}')

// BandwidthPage.js:103
GetText.add('Maximum Connection Attempts per Second', '${escape(_("Maximum Connection Attempts per Second"))}')

// BandwidthPage.js:68, BandwidthPage.js:147
GetText.add('Maximum Connections', '${escape(_("Maximum Connections"))}')

// BandwidthPage.js:82, BandwidthPage.js:161
GetText.add('Maximum Download Speed (KiB/s)', '${escape(_("Maximum Download Speed (KiB/s)"))}')

// BandwidthPage.js:96
GetText.add('Maximum Half-Open Connections', '${escape(_("Maximum Half-Open Connections"))}')

// BandwidthPage.js:75, BandwidthPage.js:154
GetText.add('Maximum Upload Slots', '${escape(_("Maximum Upload Slots"))}')

// BandwidthPage.js:89, BandwidthPage.js:168
GetText.add('Maximum Upload Speed (KiB/s)', '${escape(_("Maximum Upload Speed (KiB/s)"))}')

// MoveStorage.js:56
GetText.add('Move', '${escape(_("Move"))}')

// OptionsTab.js:262
GetText.add('Move Completed', '${escape(_("Move Completed"))}')

// OptionsTab.js:71
GetText.add('Move Completed Location', '${escape(_("Move Completed Location"))}')

// Menus.js:242, MoveStorage.js:38
GetText.add('Move Storage', '${escape(_("Move Storage"))}')

// DownloadsPage.js:75
GetText.add('Move completed to', '${escape(_("Move completed to"))}')

// NetworkPage.js:194
GetText.add('NAT-PMP', '${escape(_("NAT-PMP"))}')

// TorrentGrid.js:116, DetailsTab.js:46
GetText.add('Name', '${escape(_("Name"))}')

// NetworkPage.js:42
GetText.add('Network', '${escape(_("Network"))}')

// NetworkPage.js:177
GetText.add('Network Extras', '${escape(_("Network Extras"))}')

// InterfacePage.js:101
GetText.add('New Password', '${escape(_("New Password"))}')

// ProxyField.js:56
GetText.add('None', '${escape(_("None"))}')

// Menus.js:262, Deluge.js:157
GetText.add('Normal Priority', '${escape(_("Normal Priority"))}')

// Statusbar.js:39
GetText.add('Not Connected', '${escape(_("Not Connected"))}')

// AddWindow.js:210
GetText.add('Not a valid torrent', '${escape(_("Not a valid torrent"))}')

// ConnectionManager.js:180, ConnectionManager.js:188
GetText.add('Offline', '${escape(_("Offline"))}')

// EditTrackersWindow.js:57, OtherLimitWindow.js:73, PreferencesWindow.js:108
GetText.add('Ok', '${escape(_("Ok"))}')

// InterfacePage.js:97
GetText.add('Old Password', '${escape(_("Old Password"))}')

// Menus.js:99, OptionsTab.js:49, OptionsTab.js:40, DownloadsPage.js:92
GetText.add('Options', '${escape(_("Options"))}')

// Statusbar.js:90, Statusbar.js:138, Statusbar.js:186, OtherPage.js:42, DaemonPage.js:84
GetText.add('Other', '${escape(_("Other"))}')

// NetworkPage.js:122
GetText.add('Outgoing Ports', '${escape(_("Outgoing Ports"))}')

// EncryptionPage.js:75
GetText.add('Outgoing:', '${escape(_("Outgoing:"))}')

// TorrentGrid.js:215
GetText.add('Owner', '${escape(_("Owner"))}')

// AddConnectionWindow.js:88, LoginWindow.js:70, InterfacePage.js:84, InterfacePage.js:214
GetText.add('Password', '${escape(_("Password"))}')

// ProxyField.js:105
GetText.add('Password:', '${escape(_("Password:"))}')

// DetailsTab.js:48
GetText.add('Path', '${escape(_("Path"))}')

// Menus.js:88, Toolbar.js:70
GetText.add('Pause', '${escape(_("Pause"))}')

// NetworkPage.js:201
GetText.add('Peer Exchange', '${escape(_("Peer Exchange"))}')

// NetworkPage.js:237
GetText.add('Peer TOS Byte:', '${escape(_("Peer TOS Byte:"))}')

// TorrentGrid.js:141, PeersTab.js:61
GetText.add('Peers', '${escape(_("Peers"))}')

// BandwidthPage.js:135
GetText.add('Per Torrent Bandwidth Usage', '${escape(_("Per Torrent Bandwidth Usage"))}')

// DaemonPage.js:93
GetText.add('Periodically check the website for new releases', '${escape(_("Periodically check the website for new releases"))}')

// PluginsPage.js:92
GetText.add('Plugin', '${escape(_("Plugin"))}')

// InstallPluginWindow.js:66
GetText.add('Plugin Egg', '${escape(_("Plugin Egg"))}')

// PluginsPage.js:41
GetText.add('Plugins', '${escape(_("Plugins"))}')

// AddConnectionWindow.js:72, ProxyI2PField.js:57, DaemonPage.js:52, InterfacePage.js:147
GetText.add('Port', '${escape(_("Port"))}')

// ProxyField.js:84
GetText.add('Port:', '${escape(_("Port:"))}')

// OptionsTab.js:149, DownloadsPage.js:121
GetText.add('Pre-allocate disk space', '${escape(_("Pre-allocate disk space"))}')

// QueuePage.js:114
GetText.add('Prefer Seeding over Downloading', '${escape(_("Prefer Seeding over Downloading"))}')

// Toolbar.js:94, PreferencesWindow.js:47
GetText.add('Preferences', '${escape(_("Preferences"))}')

// OptionsTab.js:308
GetText.add('Prioritize First/Last', '${escape(_("Prioritize First/Last"))}')

// OptionsTab.js:131
GetText.add('Prioritize First/Last Pieces', '${escape(_("Prioritize First/Last Pieces"))}')

// DownloadsPage.js:103
GetText.add('Prioritize first and last pieces of torrent', '${escape(_("Prioritize first and last pieces of torrent"))}')

// FilesTab.js:60
GetText.add('Priority', '${escape(_("Priority"))}')

// OptionsTab.js:300
GetText.add('Private', '${escape(_("Private"))}')

// InterfacePage.js:166
GetText.add('Private Key', '${escape(_("Private Key"))}')

// TorrentGrid.js:128, FilesTab.js:52
GetText.add('Progress', '${escape(_("Progress"))}')

// Statusbar.js:200
GetText.add('Protocol Traffic Download/Upload', '${escape(_("Protocol Traffic Download/Upload"))}')

// ProxyPage.js:42, ProxyPage.js:52
GetText.add('Proxy', '${escape(_("Proxy"))}')

// ProxyField.js:116
GetText.add('Proxy Hostnames', '${escape(_("Proxy Hostnames"))}')

// ProxyField.js:125
GetText.add('Proxy Peer Connections', '${escape(_("Proxy Peer Connections"))}')

// TorrentGrid.js:221
GetText.add('Public', '${escape(_("Public"))}')

// Menus.js:186, OptionsTab.js:196, QueuePage.js:41
GetText.add('Queue', '${escape(_("Queue"))}')

// QueuePage.js:62
GetText.add('Queue new torrents to top', '${escape(_("Queue new torrents to top"))}')

// BandwidthPage.js:129
GetText.add('Rate limit IP overhead', '${escape(_("Rate limit IP overhead"))}')

// TorrentGrid.js:166
GetText.add('Ratio', '${escape(_("Ratio"))}')

// TorrentGrid.js:249
GetText.add('Remaining', '${escape(_("Remaining"))}')

// EditTrackersWindow.js:122, ConnectionManager.js:107, Toolbar.js:64, AddWindow.js:112
GetText.add('Remove', '${escape(_("Remove"))}')

// Menus.js:230, RemoveWindow.js:39, RemoveWindow.js:57
GetText.add('Remove Torrent', '${escape(_("Remove Torrent"))}')

// RemoveWindow.js:56
GetText.add('Remove With Data', '${escape(_("Remove With Data"))}')

// OptionsTab.js:253
GetText.add('Remove at ratio', '${escape(_("Remove at ratio"))}')

// QueuePage.js:198
GetText.add('Remove torrent when share ratio is reached', '${escape(_("Remove torrent when share ratio is reached"))}')

// Menus.js:94, Toolbar.js:76
GetText.add('Resume', '${escape(_("Resume"))}')

// EditTrackerWindow.js:57
GetText.add('Save', '${escape(_("Save"))}')

// TorrentGrid.js:208
GetText.add('Save Path', '${escape(_("Save Path"))}')

// QueuePage.js:149
GetText.add('Seed Time (m)', '${escape(_("Seed Time (m)"))}')

// QueuePage.js:120
GetText.add('Seeding', '${escape(_("Seeding"))}')

// TorrentGrid.js:134
GetText.add('Seeds', '${escape(_("Seeds"))}')

// TorrentGrid.js:270
GetText.add('Seeds:Peers', '${escape(_("Seeds:Peers"))}')

// FileWindow.js:66
GetText.add('Select a torrent', '${escape(_("Select a torrent"))}')

// InstallPluginWindow.js:65
GetText.add('Select an egg', '${escape(_("Select an egg"))}')

// OptionsTab.js:137, DownloadsPage.js:109
GetText.add('Sequential download', '${escape(_("Sequential download"))}')

// InterfacePage.js:129
GetText.add('Server', '${escape(_("Server"))}')

// InterfacePage.js:140
GetText.add('Session Timeout', '${escape(_("Session Timeout"))}')

// Statusbar.js:96
GetText.add('Set Maximum Connections', '${escape(_("Set Maximum Connections"))}')

// Statusbar.js:143
GetText.add('Set Maximum Download Speed', '${escape(_("Set Maximum Download Speed"))}')

// Statusbar.js:191
GetText.add('Set Maximum Upload Speed', '${escape(_("Set Maximum Upload Speed"))}')

// EncryptionPage.js:51, CachePage.js:52
GetText.add('Settings', '${escape(_("Settings"))}')

// QueuePage.js:127
GetText.add('Share Ratio Limit', '${escape(_("Share Ratio Limit"))}')

// QueuePage.js:138
GetText.add('Share Time Ratio', '${escape(_("Share Time Ratio"))}')

// TorrentGrid.js:228
GetText.add('Shared', '${escape(_("Shared"))}')

// InterfacePage.js:71
GetText.add('Show filters with zero torrents', '${escape(_("Show filters with zero torrents"))}')

// InterfacePage.js:64
GetText.add('Show session speed in titlebar', '${escape(_("Show session speed in titlebar"))}')

// TorrentGrid.js:122, FilesTab.js:44, FilesTab.js:54
GetText.add('Size', '${escape(_("Size"))}')

// ProxyField.js:57
GetText.add('Socks4', '${escape(_("Socks4"))}')

// ProxyField.js:58
GetText.add('Socks5', '${escape(_("Socks5"))}')

// ProxyField.js:59
GetText.add('Socks5 Auth', '${escape(_("Socks5 Auth"))}')

// ConnectionManager.js:191
GetText.add('Start Daemon', '${escape(_("Start Daemon"))}')

// Sidebar.js:34
GetText.add('State', '${escape(_("State"))}')

// ConnectionManager.js:68, StatusTab.js:39, DetailsTab.js:52
GetText.add('Status', '${escape(_("Status"))}')

// ConnectionManager.js:115, ConnectionManager.js:197, ConnectionManager.js:328
GetText.add('Stop Daemon', '${escape(_("Stop Daemon"))}')

// OptionsTab.js:225
GetText.add('Stop seed at ratio', '${escape(_("Stop seed at ratio"))}')

// QueuePage.js:175
GetText.add('Stop seeding when share ratio reaches:', '${escape(_("Stop seeding when share ratio reaches:"))}')

// OtherPage.js:72
GetText.add('System Information', '${escape(_("System Information"))}')

// EditTrackersWindow.js:76
GetText.add('Tier', '${escape(_("Tier"))}')

// Menus.js:192
GetText.add('Top', '${escape(_("Top"))}')

// QueuePage.js:76
GetText.add('Total Active', '${escape(_("Total Active"))}')

// QueuePage.js:85
GetText.add('Total Active Downloading', '${escape(_("Total Active Downloading"))}')

// QueuePage.js:94
GetText.add('Total Active Seeding', '${escape(_("Total Active Seeding"))}')

// DetailsTab.js:49
GetText.add('Total Size', '${escape(_("Total Size"))}')

// EditTrackersWindow.js:80, TorrentGrid.js:201, EditTrackerWindow.js:66, DetailsTab.js:53
GetText.add('Tracker', '${escape(_("Tracker"))}')

// NetworkPage.js:221
GetText.add('Tracker Exchange', '${escape(_("Tracker Exchange"))}')

// Sidebar.js:35
GetText.add('Tracker Host', '${escape(_("Tracker Host"))}')

// AddTrackerWindow.js:66
GetText.add('Trackers', '${escape(_("Trackers"))}')

// NetworkPage.js:229
GetText.add('Type Of Service', '${escape(_("Type Of Service"))}')

// ProxyField.js:48
GetText.add('Type:', '${escape(_("Type:"))}')

// Menus.js:123
GetText.add('U/L Speed Limit', '${escape(_("U/L Speed Limit"))}')

// NetworkPage.js:188
GetText.add('UPnP', '${escape(_("UPnP"))}')

// Statusbar.js:85, Statusbar.js:133, Statusbar.js:181, Menus.js:119, Menus.js:138, Menus.js:157, Menus.js:176
GetText.add('Unlimited', '${escape(_("Unlimited"))}')

// EditTrackersWindow.js:102, Menus.js:198, Toolbar.js:83, FileBrowser.js:53
GetText.add('Up', '${escape(_("Up"))}')

// TorrentGrid.js:263
GetText.add('Up Limit', '${escape(_("Up Limit"))}')

// TorrentGrid.js:154
GetText.add('Up Speed', '${escape(_("Up Speed"))}')

// Menus.js:218
GetText.add('Update Tracker', '${escape(_("Update Tracker"))}')

// OtherPage.js:56
GetText.add('Updates', '${escape(_("Updates"))}')

// Menus.js:161
GetText.add('Upload Slot Limit', '${escape(_("Upload Slot Limit"))}')

// Statusbar.js:152
GetText.add('Upload Speed', '${escape(_("Upload Speed"))}')

// TorrentGrid.js:242
GetText.add('Uploaded', '${escape(_("Uploaded"))}')

// InstallPluginWindow.js:78
GetText.add('Uploading your plugin...', '${escape(_("Uploading your plugin..."))}')

// FileWindow.js:82
GetText.add('Uploading your torrent...', '${escape(_("Uploading your torrent..."))}')

// UrlWindow.js:60, AddWindow.js:102
GetText.add('Url', '${escape(_("Url"))}')

// NetworkPage.js:76, NetworkPage.js:131
GetText.add('Use Random Ports', '${escape(_("Use Random Ports"))}')

// InterfacePage.js:158
GetText.add('Use SSL (paths relative to Deluge config folder)', '${escape(_("Use SSL (paths relative to Deluge config folder)"))}')

// AddConnectionWindow.js:83
GetText.add('Username', '${escape(_("Username"))}')

// ProxyField.js:96
GetText.add('Username:', '${escape(_("Username:"))}')

// ConnectionManager.js:80
GetText.add('Version', '${escape(_("Version"))}')

// StatusTab.js:122
GetText.add('Warning', '${escape(_("Warning"))}')

// OtherPage.js:90
GetText.add('Yes, please send anonymous statistics', '${escape(_("Yes, please send anonymous statistics"))}')

// LoginWindow.js:131
GetText.add('You entered an incorrect password', '${escape(_("You entered an incorrect password"))}')

// InterfacePage.js:215
GetText.add('Your old password was incorrect!', '${escape(_("Your old password was incorrect!"))}')

// InterfacePage.js:225
GetText.add('Your password was successfully changed!', '${escape(_("Your password was successfully changed!"))}')

// InterfacePage.js:200
GetText.add('Your passwords don\'t match!', '${escape(_("Your passwords don\'t match!"))}')

