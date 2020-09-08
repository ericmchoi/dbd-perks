import os

files = os.listdir("../../static/perks/")

files = map(lambda f: f[10:-4], files)

def uncamel(s):
    last_cap = True
    ret = []
    for c in s:
        if c.isupper():
            if not last_cap:
                ret.append(" ")
            last_cap = True
        else:
            last_cap = False
        ret.append(c)

    ret[0] = ret[0].upper()
    return ''.join(ret)


for f in files:
    if os.path.exists(f"{f}.yml"):
        print(f"{f}.yml exists.")
    else:
        with open(f"{f}.yml", "w") as fh:
            name = uncamel(f)
            print(name)
            fh.write(f"name: {name}\n")
            fh.write(f"codename: {f}")