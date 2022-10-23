import requests
r = requests.get('http://localhost:3000/keyboard-layouts/')

for keyboardlayout in r.json():
    keyboardlayoutId = keyboardlayout["id"]
    mwfFileContent=requests.get('http://localhost:3000/keyboard-layouts/'+keyboardlayoutId+'/file')
    outfileMwf = open(keyboardlayoutId+'.mwf','w')
    outfileMwf.write(mwfFileContent.text)
    htmlFileContent=requests.get('http://localhost:3000/keyboard-layouts/'+keyboardlayoutId+'/html')
    outfileHtml = open(keyboardlayoutId+'.html','w')
    outfileHtml.write(htmlFileContent.text)
