# Combobox Bug

Repository to showcase a possible [Headless UI](https://headlessui.com/)
[Combobox](https://headlessui.com/react/combobox) bug.

The bug is: The currently selected option in the Combobox is not displayed
correctly when it is chosen outside the Combobox after previously exiting the
Combobox using the Tab key.


# Installation

```bash
git clone https://github.com/omarkohl/combobox-bug
cd combobox-bug
npm install
npx vite
```

Open http://localhost:5173 in a browser.


# Reproduce Bug

* Click in the Combobox input field
* Use the arrow keys to select a person e.g. Arlene Mccoy
* Use the Tab key to exit the Combobox
* Either hit "Enter" or click on the button "Select Tanya".
* Tanya Fox is now the selected person but the Combobox still displays "Arlene
  Mccoy". **"Tanya Fox" should be displayed instead.**

![Screenshot](screenshot.png)

If at this point you open the Combobox, it is updated correctly.

The problem does not appear if you use the mouse to select the user in the
Combobox and then click the button. Even if you first click somewhere else. It
seems to be specifically related to the use of the keyboard.
