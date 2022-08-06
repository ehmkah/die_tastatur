import {Test, TestingModule} from '@nestjs/testing';
import {KeyboardLayoutsController} from './keyboard-layouts.controller';
import {KeyboardLayoutsService} from "./keyboard-layouts.service";
import {ExecutionsService} from "../executions/executions.service";
import {KeyboardsService} from "../keyboards/keyboards.service";
import {CommandsService} from "../commands/commands.service";
import {KeysetsService} from "../keysets/keysets.service";
import {OperatingSystemsService} from "../operating_systems/operating_systems.service";
import {ToolsService} from "../tools/tools.service";

describe('KeyboardLayoutsController', () => {
    let controller: KeyboardLayoutsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [KeyboardLayoutsController],
            providers: [KeyboardLayoutsService, ExecutionsService, KeyboardsService, CommandsService, KeysetsService, OperatingSystemsService, ToolsService]
        }).compile();

        controller = module.get<KeyboardLayoutsController>(KeyboardLayoutsController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

    it('should return valid layout for MCI 128', () => {
        const actual = controller.getFile('2');
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
!@KEYPRINT:A01 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A02 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A03 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A04 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A05 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A06 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A07 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A08 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A09 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A10 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:A16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B01 "kube\\\\linepods";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B02 "kube\\\\linelogs";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B03 "kubens";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B04 "kubectx";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B05 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B06 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B07 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B08 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B09 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B10 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:B16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C01 "docker\\\\linels";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C02 "docker\\\\linestop";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C03 "docker\\\\linelogs";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C04 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C05 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C06 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C07 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C08 "compose\\\\linedown";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C09 "compose\\\\linepull";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C10 "compose\\\\lineup";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C15 "yes";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:C16 "no";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D01 "run\\\\linelast";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D02 "debug\\\\linelast";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D03 "select\\\\linerun";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D04 "select\\\\linedebug";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D05 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D06 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D07 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D08 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D09 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D10 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:D16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E01 "load\\\\linegradle\\\\linechanges";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E02 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E03 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E04 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E05 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E06 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E07 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E08 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E09 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E10 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:E16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F01 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F02 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F03 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F04 "ssh\\\\lineagent";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F05 "ssh\\\\lineagent";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F06 "add\\\\linekey";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F07 "add\\\\linekey";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F08 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F09 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F10 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:F16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
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
!@KEYPRINT:G15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:G16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H01 "git\\\\lineview";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H02 "open\\\\lineCommit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H03 "open\\\\lineCommit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H04 "commit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H05 "commit";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H06 "push";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H07 "push";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H08 "push2";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H09 "push2";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H10 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H11 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H12 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H13 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H14 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H15 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYPRINT:H16 "";0.00;0.00;0.00;0.00;       0;       0;0;0;0;0;0;
!@KEYLAYER:AlwaysActive,AAAA,11
B01/P: "kubectl{SPACE}get{SPACE}pods{RETURN}"
B02/P: "kubectl{SPACE}logs{SPACE}-f{SPACE}"
B03/P: "kubens{RETURN}"
B04/P: "kubectx{RETURN}"
C01/P: "docker container ls{RETURN}"
C02/P: "docker container stop "
C03/P: "docker{SPACE}logs{SPACE}-f{SPACE}"
C08/P: "docker-compose{SPACE}down{SPACE}{RETURN}"
C09/P: "docker-compose{SPACE}pull{SPACE}{RETURN}"
C10/P: "docker-compose{SPACE}up{SPACE}-d{SPACE}"
C15/P: "yes{RETURN}"
C16/P: "no{RETURN}"
D01/P: "{SHIFT+{F10}}"
D02/P: "{SHIFT+{F9}}"
D03/K/P: "{ALT+{SHIFT+{F10}}}"
D04/P: "{ALT+{SHIFT+{F9}}}"
E01/P: "{CTRL+{SHIFT+O}}"
F03/P: "ssh{SPACE}dev{RETURN}"
F04/P: "ssh-agent{SPACE}bash{RETURN}"
F05/P: "ssh-agent{SPACE}bash{RETURN}"
F06/K/P: "ssh-add{SPACE}{ALT+n}/.ssh/id_rsa{RETURN}"
F07/K/P: "ssh-add{SPACE}~/.ssh/id_rsa{RETURN}"
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
G12/P: "git{SPACE}reset{SPACE}HEAD{ALT+n}{SPACE}{RETURN}"
G13/K/P: "git{SPACE}reset{SPACE}--hard{RETURN}"
G14/P: "git{SPACE}branch{SPACE}-D{SPACE}"
H01/P: "{LWIN+9}"
H02/P: "{CTRL+k}"
H03/P: "{CTRL+k}"
H04/P: "{ALT+i}"
H05/P: "{ALT+i}"
H06/P: "{CTRL+{SHIFT+k}}"
H07/P: "{CTRL+{SHIFT+k}}"
H08/P: "{ALT+p}"
H09/P: "{ALT+p}"
H14/K/P: "{LWIN+{SPACE}}"
H15/K/P: "{LWIN+{SPACE}}"
!@KEYATTRIB:A12 00000A11
!@KEYATTRIB:A16 00000A10
!@KEYATTRIB:B01 00000A10
!@KEYATTRIB:B02 00000A10
!@KEYATTRIB:B03 00000A11
!@KEYATTRIB:B04 00000A11
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
!@KEYATTRIB:D03 00000A11
!@KEYATTRIB:D04 00000A10
!@KEYATTRIB:E01 00000A10
!@KEYATTRIB:F03 00000A10
!@KEYATTRIB:F04 00000A10
!@KEYATTRIB:F05 00000A10
!@KEYATTRIB:F06 00000A11
!@KEYATTRIB:F07 00000A11
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
!@KEYATTRIB:G13 00000A11
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
!@KEYATTRIB:H14 00000A11
!@KEYATTRIB:H15 00000A11
!@KEYLAYER:Normal-Layer,8A80,10
F01-C-S-A-L/P: "git{SPACE}push{SPACE}origin{SPACE}HEAD{RETURN}"
G01-C-S-A-L/P: "git{SPACE}fetch{SPACE}-p{RETURN}"
G05-C-S-A-L/P: "git{SPACE}checkout{SPACE}master{RETURN}"
!@KEYATTRIB:F01 00000A10
!@KEYATTRIB:G01 00000A10
!@KEYATTRIB:G05 00000A10
!@KEYLAYER:Shift-Layer,8A81,10
!@KEYLAYER:Control-Layer,8A86,10
!@KEYLAYER:StdKey-Layer,6AAA,514
!@KEYLAYER:Fn-Layer,9AAA,11
`)
    });
});
