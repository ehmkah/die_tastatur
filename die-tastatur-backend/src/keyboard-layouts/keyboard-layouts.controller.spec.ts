import {Test, TestingModule} from '@nestjs/testing';
import {KeyboardLayoutsController} from './keyboard-layouts.controller';
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {ExecutionsService} from "../executions/executions.service";
import {KeyboardIds, KeyboardsService} from "../keyboards/keyboards.service";
import {CommandsService} from "../commands/commands.service";
import {KeysetsService} from "../keysets/keysets.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('KeyboardLayoutsController', () => {
    let controller: KeyboardLayoutsController;
    let keyboardService: KeyboardsService;


    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [KeyboardLayoutsController],
            providers: [KeyboardLayoutsService, ExecutionsService, KeyboardsService, CommandsService, KeysetsService, OperatingSystemsService, ToolsService]
        }).compile();

        keyboardService = module.get<KeyboardsService>(KeyboardsService);
        controller = module.get<KeyboardLayoutsController>(KeyboardLayoutsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return right letters for keyboard', () => {
        expect(controller.getLetters(keyboardService.findById(KeyboardIds.PREHKEYTECH_128))).toEqual(['H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']);
    });

    it('should return right letters for keyboard', () => {
        expect(controller.getLetters(keyboardService.findById(KeyboardIds.PREHKEYTECH_96))).toEqual(['H', 'G', 'F', 'E', 'D', 'C']);
    });

    it('should return valid layout for MCI 128', () => {
        const actual = controller.getFile('maxos_default_dev');
        expect(actual).toEqual(`TYPE MC128
MEMORY 8000
VERSION  CYPRESS  WINPROG 2.5.3.5
INTERFACE AT
SOUND 33,40,100,400
RATE 10,500,FAST
LANGUAGE GR,C
HOTKEY0 : "{EMPTY}"
HOTKEY1 : "{EMPTY}"
MODE -BCR-FCR+BA1
MSR M3, : ""
!@KEYCAP:12.00
!@KEYBOARDTYPESTRING:MCI 128
!@KEYGLOBALPRINT:1.00;0.20;0.00;4.80;  FFFFFF;       0;190;0;0;0;0;Arial
!@KEYBOARDSIZE:364.00;207.00
!@KEYPRINT:A01 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A02 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A03 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A04 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A05 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A06 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A07 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A08 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A09 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A10 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B01 "kube\\\\linepods";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B02 "kube\\\\linelogs";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B03 "kubens";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B04 "kubectx";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B05 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B06 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B07 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B08 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B09 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B10 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C01 "docker\\\\linels";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C02 "docker\\\\linestop";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C03 "docker\\\\linelogs";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C04 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C05 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C06 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C07 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C08 "compose\\\\linedown";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C09 "compose\\\\linepull";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C10 "compose\\\\lineup";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C15 "yes";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C16 "no";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D01 "run";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D02 "debug";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D03 "select run";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D04 "select debug";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D05 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D06 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D07 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D08 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D09 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D10 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E01 "load\\\\linegradle\\\\linechanges";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E02 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E03 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E04 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E05 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E06 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E07 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E08 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E09 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E10 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F01 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F02 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F03 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F04 "ssh\\\\lineagent";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F05 "ssh\\\\lineagent";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F06 "add\\\\linekey";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F07 "add\\\\linekey";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F08 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F09 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F10 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G01 "fetch";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G02 "pull";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G03 "merge\\\\linemaster";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G04 "merge\\\\linedevelop";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G05 "co\\\\linemaster";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G06 "co\\\\linedevelop";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G07 "co\\\\line-";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G08 "co\\\\line-b";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G09 "co";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G10 "push\\\\lineHEAD";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G11 "push\\\\linetag";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G12 "undo\\\\linecommit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G13 "reset";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G14 "delete\\\\linebranch";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H01 "git\\\\lineview";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H02 "open\\\\lineCommit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H03 "open\\\\lineCommit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H04 "commit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H05 "commit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H06 "push";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H07 "push";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H08 "commit+push";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H09 "commit+push";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H10 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H11 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H12 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H13 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H14 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H15 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H16 "..........\\\\line..........";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYLAYER:AlwaysActive,AAAA,11
A01/P: ""
A02/P: ""
A03/P: ""
A04/P: ""
A05/P: ""
A06/P: ""
A07/P: ""
A08/P: ""
A09/P: ""
A10/P: ""
A11/P: ""
A12/P: ""
A13/P: ""
A14/P: ""
A15/P: ""
A16/P: ""
B01/P: "kubectl{SPACE}get{SPACE}pods{RETURN}"
B02/P: "kubectl{SPACE}logs{SPACE}-f{SPACE}"
B03/P: "kubens{RETURN}"
B04/P: "kubectx{RETURN}"
B05/P: ""
B06/P: ""
B07/P: ""
B08/P: ""
B09/P: ""
B10/P: ""
B11/P: ""
B12/P: ""
B13/P: ""
B14/P: ""
B15/P: ""
B16/P: ""
C01/P: "docker{SPACE}container{SPACE}ls{RETURN}"
C02/P: "docker{SPACE}container{SPACE}stop{SPACE}"
C03/P: "docker{SPACE}logs{SPACE}-f{SPACE}"
C04/P: ""
C05/P: ""
C06/P: ""
C07/P: ""
C08/P: "docker-compose{SPACE}down{RETURN}"
C09/P: "docker-compose{SPACE}pull{RETURN}"
C10/P: "docker-compose{SPACE}up{SPACE}-d{SPACE}"
C11/P: ""
C12/P: ""
C13/P: ""
C14/P: ""
C15/P: "yes{RETURN}"
C16/P: "no{RETURN}"
D01/P: "{CTRL+r}"
D02/P: "{CTRL+d}"
D03/P: "{CTRL+{ALT+r}}"
D04/P: "{CTRL+{ALT+d}}"
D05/P: ""
D06/P: ""
D07/P: ""
D08/P: ""
D09/P: ""
D10/P: ""
D11/P: ""
D12/P: ""
D13/P: ""
D14/P: ""
D15/P: ""
D16/P: ""
E01/P: "{CTRL+{SHIFT+O}}"
E02/P: ""
E03/P: ""
E04/P: ""
E05/P: ""
E06/P: ""
E07/P: ""
E08/P: ""
E09/P: ""
E10/P: ""
E11/P: ""
E12/P: ""
E13/P: ""
E14/P: ""
E15/P: ""
E16/P: ""
F01/P: ""
F02/P: ""
F03/P: ""
F04/P: "ssh-agent{SPACE}bash{RETURN}"
F05/P: "ssh-agent{SPACE}bash{RETURN}"
F06/P: "ssh-add{SPACE}~/.ssh/id_rsa{RETURN}"
F07/P: "ssh-add{SPACE}~/.ssh/id_rsa{RETURN}"
F08/P: ""
F09/P: ""
F10/P: ""
F11/P: ""
F12/P: ""
F13/P: ""
F14/P: ""
F15/P: ""
F16/P: ""
G01/P: "git{SPACE}fetch{SPACE}-p{RETURN}"
G02/P: "git{SPACE}pull{SPACE}-p{RETURN}"
G03/P: "git{SPACE}merge{SPACE}origin/master{RETURN}"
G04/P: "git{SPACE}merge{SPACE}origin/develop{RETURN}"
G05/P: "git{SPACE}checkout{SPACE}master{RETURN}"
G06/P: "git{SPACE}checkout{SPACE}develop{RETURN}"
G07/P: "git{SPACE}checkout{SPACE}-{RETURN}"
G08/P: "git{SPACE}checkout{SPACE}-b{SPACE}"
G09/P: "git{SPACE}checkout{SPACE}"
G10/P: "git{SPACE}push{SPACE}-u{SPACE}origin{SPACE}HEAD{RETURN}"
G11/P: "git{SPACE}push{SPACE}-u{SPACE}origin{SPACE}--tags{RETURN}"
G12/P: "git{SPACE}reset{SPACE}HEAD{ALT+n}{RETURN}"
G13/P: "git{SPACE}reset{SPACE}--hard{RETURN}"
G14/P: "git{SPACE}branch{SPACE}-D{SPACE}"
G15/P: ""
G16/P: ""
H01/P: "{LWIN+9}"
H02/P: "{CTRL+k}"
H03/P: "{CTRL+k}"
H04/P: "{ALT+i}"
H05/P: "{ALT+i}"
H06/P: "{CTRL+{SHIFT+k}}"
H07/P: "{CTRL+{SHIFT+k}}"
H08/P: "{ALT+p}"
H09/P: "{ALT+p}"
H10/P: ""
H11/P: ""
H12/P: ""
H13/P: ""
H14/P: ""
H15/P: ""
H16/P: ""
!@KEYATTRIB:A12 00000A11
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
`)
    });
});
