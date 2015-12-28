---

## Def

    def foo():

---

## Return

    return False

---

## Arg, Arg

    def foo(arg1, arg2):

---

## Args

    def foo(*args):

---

## Args, Kwargs

    def mixed(*args, **kwargs):
    mixed('arg1', 'arg2', 'arg3', 'key'='value')

---

## Sort

    def compare(item1, item2):
        if fitness(item1) < fitness(item2):
            return -1
        elif fitness(item1) > fitness(item2):
            return 1
        else:
            return 0

