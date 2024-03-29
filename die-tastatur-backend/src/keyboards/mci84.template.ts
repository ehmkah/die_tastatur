import {KeyboardLayout} from "../keyboard-layouts/keyboard-layout.interface";

function mapToMciKeyprint(keyboardLayout: KeyboardLayout, rowCounter: number, columnCounter: number) {
    if(keyboardLayout.keys[rowCounter][columnCounter]?.execution=== undefined) {
        console.log(`in Keyboard ${keyboardLayout.name} at position ${rowCounter},${columnCounter} command is not defined.`);
    }
    let keyPrint = keyboardLayout.keys[rowCounter][columnCounter]?.execution.command.defaultKeyPrintText ?? '';
    return keyPrint.replace(/\n/gi, "\\\\line");
}

export function mapToMC84(keyboardLayout: KeyboardLayout): string {
    const rows: { [key: string]: number } = {'A': 6, 'B': 5, 'C': 4, 'D': 3, 'E': 2, 'F': 1, 'G': 0};
    const columns: Array<string> = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    let result = `TYPE M84W/X
MEMORY 8000
VERSION  CYPRESS  WINPROG 2.5.3.5
INTERFACE AT
SOUND 33,40,100,400
RATE 20,500,FAST
LANGUAGE GR,C
HOTKEY0 : "{EMPTY}"
HOTKEY1 : "{EMPTY}"
MODE -BCR-FCR+BA1
MSR M3, : ""
!@KEYCAP:12.00
!@KEYBOARDTYPESTRING:MCI 84
!@KEYGLOBALPRINT:1.00;0.20;0.00;4.80;  FFFFFF;       0;190;0;0;0;0;Arial
!@KEYBOARDSIZE:288.00;188.00
`;

    Object.entries(rows).forEach(([key, value]) => {
        let columnCounter = -1;
        for (const column of columns) {
            columnCounter = columnCounter + 1;
            const printKey = mapToMciKeyprint(keyboardLayout, value, columnCounter);
            result = result + `!@KEYPRINT:${key}${column} "${printKey}";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
`;
        }
    });

    result = result + `!@KEYLAYER:AlwaysActive,AAAA,11
`;
    Object.entries(rows).forEach(([key, value]) => {
        let columnCounter = -1;
        for (const column of columns) {
            columnCounter = columnCounter + 1;
            const executor = keyboardLayout.keys[value][columnCounter]?.execution.executor ?? null;
            if (executor !== null) {
                result = result + `${key}${column}/P: "${executor}"
`;
            }
        }
    });
    result = result + `!@KEYATTRIB:A12 00000A11
!@KEYATTRIB:A16 00000A10
!@KEYATTRIB:B01 00000A10
!@KEYATTRIB:B02 00000A10
!@KEYATTRIB:B03 00000A10
!@KEYATTRIB:B04 00000A10
!@KEYATTRIB:C01 00000A10
!@KEYATTRIB:C02 00000A10
!@KEYATTRIB:C03 00000A10
!@KEYATTRIB:C08 00000A10
!@KEYATTRIB:C09 00000A10
!@KEYATTRIB:C10 00000A10
!@KEYATTRIB:C15 00000A10
!@KEYATTRIB:C16 00000A10
!@KEYATTRIB:D01 00000A10
!@KEYATTRIB:D02 00000A10
!@KEYATTRIB:D03 00000A10
!@KEYATTRIB:D04 00000A10
!@KEYATTRIB:E01 00000A10
!@KEYATTRIB:F03 00000A10
!@KEYATTRIB:F04 00000A10
!@KEYATTRIB:F05 00000A10
!@KEYATTRIB:F06 00000A10
!@KEYATTRIB:F07 00000A10
!@KEYATTRIB:G01 00000A10
!@KEYATTRIB:G02 00000A10
!@KEYATTRIB:G03 00000A10
!@KEYATTRIB:G04 00000A10
!@KEYATTRIB:G05 00000A10
!@KEYATTRIB:G06 00000A10
!@KEYATTRIB:G07 00000A10
!@KEYATTRIB:G08 00000A10
!@KEYATTRIB:G09 00000A10
!@KEYATTRIB:G10 00000A10
!@KEYATTRIB:G11 00000A10
!@KEYATTRIB:G12 00000A10
!@KEYATTRIB:G13 00000A10
!@KEYATTRIB:G14 00000A10
!@KEYATTRIB:H01 00000A10
!@KEYATTRIB:H02 00000A10
!@KEYATTRIB:H03 00000A10
!@KEYATTRIB:H04 00000A10
!@KEYATTRIB:H05 00000A10
!@KEYATTRIB:H06 00000A10
!@KEYATTRIB:H07 00000A10
!@KEYATTRIB:H08 00000A10
!@KEYATTRIB:H09 00000A10
!@KEYATTRIB:H14 00000A10
!@KEYATTRIB:H15 00000A10
!@KEYLAYER:Normal-Layer,8A80,10
!@KEYLAYER:Shift-Layer,8A81,10
!@KEYLAYER:Control-Layer,8A86,10
!@KEYLAYER:StdKey-Layer,6AAA,514
!@KEYLAYER:Fn-Layer,9AAA,11
`

    return result;
}