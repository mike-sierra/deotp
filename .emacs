
(add-to-list 'load-path "~/.emacs.d/lisp/")
(add-to-list 'load-path "~/elisp")

(setq-default major-mode 'text-mode)
;;; Indent with spaces, not tabs
(setq-default indent-tabs-mode nil)
;;; Do not interrupt editing sessions with autosaves
(setq-default auto-save-mode nil)
;;; use auto wrap
;;; (add-hook 'text-mode-hook 'turn-on-auto-fill)
;;; Case-sensitive searches
(setq-default case-fold-search nil)
;;; show horizontal position within status bar:
(setq column-number-mode t)
;;; make edited files end with a carriage return:
(setq require-final-newline t)

;;; Keep backup/autosave files out of working directories
(defvar backup-dir (expand-file-name "~/.emacs.d/backups/"))
(defvar autosave-dir (expand-file-name "~/.emacs.d/autosaves/"))
(setq backup-directory-alist (list (cons ".*" backup-dir)))
(setq auto-save-list-file-prefix autosave-dir)
(setq auto-save-file-name-transforms `((".*" ,autosave-dir t)))

;;; Disable annoying audio feedback
(setq visible-bell nil)
(setq ring-bell-function `(lambda ()
   (set-face-background 'default "DodgerBlue")
   (set-face-background 'default "black")))
